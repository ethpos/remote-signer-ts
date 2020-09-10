import { SignRequest, ListPublicKeysResponse, SignResponse, } from '../../protos/keymanager_pb'
import { IRemoteSignerServer, RemoteSignerService } from '../../protos/keymanager_grpc_pb'
import { Empty } from 'google-protobuf/google/protobuf/empty_pb'
import { Server as GRPCServer, ServerCredentials, ServerUnaryCall, sendUnaryData, } from 'grpc'
import { getLogger } from 'log4js'
var logger = getLogger('server');
logger.level = "debug";

import { initBLS, sign } from '@chainsafe/bls'
import { ServerOptions } from './server.interfaces'
import { Keyvault } from '../keyvault/keyvault.interfaces'
import { StaticKeyvault } from '../keyvault/static.keyvault'

initBLS().then(() => logger.info('BLS intialized'))

class RemoteSignServer implements IRemoteSignerServer {
    constructor(private keyvault: Keyvault = new StaticKeyvault()) { }
    async listValidatingPublicKeys(call: ServerUnaryCall<Empty>, callback: sendUnaryData<ListPublicKeysResponse>) {
        try {
            logger.info(`list pubkeys request received`)
            const response = new ListPublicKeysResponse()
            const pubkeys = await this.keyvault.listPublicKeys()
            pubkeys.forEach(pubkey => {
                response.addValidatingPublicKeys(Buffer.from(pubkey, 'hex'))
            })
            logger.debug(`send ${pubkeys.length} keys`)
            callback(null, response)
        } catch (e) {
            logger.error(`error getting list of pubkeys: ${e.message}`)
            const response = new ListPublicKeysResponse()
            return callback(null, response)
        }
    }
    async sign(call: ServerUnaryCall<SignRequest>, callback: sendUnaryData<SignResponse>) {
        //get key
        const pubkey = Buffer.from(call.request.getPublicKey_asU8()).toString('hex')
        logger.info(`sign request for pubkey ${pubkey}`)
        const data = call.request.getSigningRoot_asU8()
        try {
            const secretStr = await this.keyvault.getSecretKey(pubkey)
            const secret = Uint8Array.from(Buffer.from(secretStr, 'hex'))
            // sign
            const signature = sign(secret, data)
            //send
            const response = new SignResponse()
            response.setSignature(signature)
            logger.debug(`send signature`)
            return callback(null, response)
        } catch (e) {
            switch (e.message) {
                case 'ERR_KEY_NOT_FOUND':
                    logger.error(`no key found for pubkey ${pubkey}`)
                    break
                default:
                    logger.error(`error during signing: ${e.message}`)
            }
            const response = new SignResponse()
            response.setStatus(SignResponse.Status.FAILED)
            return callback(null, response)
        }
    }
}

export class Server {
    server: GRPCServer
    constructor(options: ServerOptions, keyvault?: Keyvault) {
        const bindAddress = `${options.host}:${options.port}`
        this.server = new GRPCServer()
        this.server.addService<IRemoteSignerServer>(RemoteSignerService, new RemoteSignServer(keyvault))
        this.server.bind(bindAddress, ServerCredentials.createSsl(
            options.caCert,
            [{
                private_key: options.tlsKey,
                cert_chain: options.tlsCert
            }],
        ))
        logger.info(`Remote signer listing on ${bindAddress}`)
    }

    serve() {
        this.server.start()
    }
}