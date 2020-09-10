import { Keyvault } from "./keyvault.interfaces"

export class StaticKeyvault implements Keyvault {
    private keys: { [pubkey: string]: { secret: string } } = {
        'a99a76ed7796f7be22d5b7e85deeb7c5677e88e511e0b337618f8c4eb61349b4bf2d153f649f7b53359fe8b94a38e44c': {
            secret: '25295f0d1d592a90b333e26e85149708208e9f8e8bc18f6c77bd62f8ad7a6866',
        },
        'b99a76ed7796f7be22d5b7e85deeb7c5677e88e511e0b337618f8c4eb61349b4bf2d153f649f7b53359fe8b94a38e44c': {
            secret: '25295f0d1d592a90b333e26e85149708208e9f8e8bc18f6c77bd62f8ad7a6866',
        },
    }
    async listPublicKeys(): Promise<string[]> {
        return Object.keys(this.keys)
    }

    async getSecretKey(pubKey: string): Promise<string> {
        const key = this.keys[pubKey]
        if (key === undefined) {
            throw Error('ERR_KEY_NOT_FOUND')
        }
        return key.secret
    }
}