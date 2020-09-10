export interface Keyvault {
    listPublicKeys: () => Promise<string[]>
    getSecretKey: (pubKey: string) => Promise<string>
}
