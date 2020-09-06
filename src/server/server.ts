import { SignRequest, ListPublicKeysResponse, SignResponse, } from '../../protos/keymanager_pb'
import { IRemoteSignerServer, RemoteSignerService } from '../../protos/keymanager_grpc_pb'
import { Empty } from 'google-protobuf/google/protobuf/empty_pb'
import { Server as GRPCServer, ServerCredentials, ServerUnaryCall, sendUnaryData, } from 'grpc'
import { getLogger } from 'log4js'
var logger = getLogger('server');
logger.level = "debug";

import { initBLS, sign } from '@chainsafe/bls'
import { ServerOptions } from './server.interfaces'

initBLS().then(() => logger.info('BLS intialized'))

const keys: { [pubkey: string]: { secret: string } } = {
    'a99a76ed7796f7be22d5b7e85deeb7c5677e88e511e0b337618f8c4eb61349b4bf2d153f649f7b53359fe8b94a38e44c': {
        secret: '25295f0d1d592a90b333e26e85149708208e9f8e8bc18f6c77bd62f8ad7a6866',
    },
    'b99a76ed7796f7be22d5b7e85deeb7c5677e88e511e0b337618f8c4eb61349b4bf2d153f649f7b53359fe8b94a38e44c': {
        secret: '25295f0d1d592a90b333e26e85149708208e9f8e8bc18f6c77bd62f8ad7a6866',
    },
}

class RemoteSignServer implements IRemoteSignerServer {
    listValidatingPublicKeys(call: ServerUnaryCall<Empty>, callback: sendUnaryData<ListPublicKeysResponse>) {
        logger.info(`list pubkeys request received`)
        const response = new ListPublicKeysResponse()
        const pubkeys = Object.keys(keys)
        pubkeys.forEach(pubkey => {
            response.addValidatingPublicKeys(pubkey)
        })
        logger.debug(`send ${pubkeys.length} keys`)
        callback(null, response)
    }
    sign(call: ServerUnaryCall<SignRequest>, callback: sendUnaryData<SignResponse>) {
        //get key
        const pubkey = Buffer.from(call.request.getPublicKey_asU8()).toString('hex')
        logger.info(`sign request for pubkey ${pubkey}`)
        const data = call.request.getSigningRoot_asU8()
        const key = keys[pubkey.toString()]
        if (key) {
            // sign
            const secret = Uint8Array.from(Buffer.from(key.secret, 'hex'))
            const signature = sign(secret, data)
            //send
            const response = new SignResponse()
            response.setSignature(signature)
            logger.debug(`send signature`)
            return callback(null, response)
        } else {
            logger.error(`pubkey not found: ${pubkey}`)
            const response = new SignResponse()
            response.setStatus(SignResponse.Status.FAILED)
            return callback(null, response)
        }

    }
}

export class Server {
    server: GRPCServer
    constructor(options: ServerOptions) {
        const bindAddress = `${options.host}:${options.port}`
        this.server = new GRPCServer()
        this.server.addService<IRemoteSignerServer>(RemoteSignerService, new RemoteSignServer())
        this.server.bind(bindAddress, ServerCredentials.createSsl(
            options.caCert,
            [{
                private_key: options.tlsKey,
                cert_chain: options.tlsCert
            }]
        ))
        logger.info(`Remote signer listing on ${bindAddress}`)
    }

    serve() {
        this.server.start()
    }
}

export function serve() {
}