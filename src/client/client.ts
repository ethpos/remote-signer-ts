import { credentials, ServiceError } from 'grpc'
import { RemoteSignerClient } from '../../protos/keymanager_grpc_pb'
import { SignRequest } from '../../protos/keymanager_pb'
import { Empty } from 'google-protobuf/google/protobuf/empty_pb'
import { ClientOptions } from './client.interfaces'

export class Client {

    private _client: RemoteSignerClient

    constructor(options: ClientOptions) {
        this._client = new RemoteSignerClient(`${options.host}:${options.port}`, credentials.createSsl(options.caCert))
    }

    listValidatingPublicKeys(callback: (err?: ServiceError | null, result?: Buffer[]) => void) {
        return this._client.listValidatingPublicKeys(new Empty(), (err, response) => {
            if (err) {
                return callback(err)
            }
            callback(err, response.getValidatingPublicKeysList_asU8().map(pubkey => Buffer.from(pubkey)))
        })
    }

    sign(pubkey: Buffer, signRoot: Buffer, callback: (err: ServiceError | null, result?: Buffer) => void) {
        const signRequest = new SignRequest()
        signRequest.setPublicKey(Uint8Array.from(pubkey))
        signRequest.setSigningRoot(Uint8Array.from(signRoot))
        return this._client.sign(signRequest, (err, response) => {
            if (err) {
                return callback(err)
            }
            callback(err, Buffer.from(response.getSignature_asU8()))
        })
    }
}