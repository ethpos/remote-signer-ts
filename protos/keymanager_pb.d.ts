// package: ethereum.validator.accounts.v2
// file: keymanager.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

export class ListPublicKeysResponse extends jspb.Message { 
    clearValidatingPublicKeysList(): void;
    getValidatingPublicKeysList(): Array<Uint8Array | string>;
    getValidatingPublicKeysList_asU8(): Array<Uint8Array>;
    getValidatingPublicKeysList_asB64(): Array<string>;
    setValidatingPublicKeysList(value: Array<Uint8Array | string>): ListPublicKeysResponse;
    addValidatingPublicKeys(value: Uint8Array | string, index?: number): Uint8Array | string;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListPublicKeysResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListPublicKeysResponse): ListPublicKeysResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListPublicKeysResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListPublicKeysResponse;
    static deserializeBinaryFromReader(message: ListPublicKeysResponse, reader: jspb.BinaryReader): ListPublicKeysResponse;
}

export namespace ListPublicKeysResponse {
    export type AsObject = {
        validatingPublicKeysList: Array<Uint8Array | string>,
    }
}

export class SignRequest extends jspb.Message { 
    getPublicKey(): Uint8Array | string;
    getPublicKey_asU8(): Uint8Array;
    getPublicKey_asB64(): string;
    setPublicKey(value: Uint8Array | string): SignRequest;

    getSigningRoot(): Uint8Array | string;
    getSigningRoot_asU8(): Uint8Array;
    getSigningRoot_asB64(): string;
    setSigningRoot(value: Uint8Array | string): SignRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SignRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SignRequest): SignRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SignRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SignRequest;
    static deserializeBinaryFromReader(message: SignRequest, reader: jspb.BinaryReader): SignRequest;
}

export namespace SignRequest {
    export type AsObject = {
        publicKey: Uint8Array | string,
        signingRoot: Uint8Array | string,
    }
}

export class SignResponse extends jspb.Message { 
    getSignature(): Uint8Array | string;
    getSignature_asU8(): Uint8Array;
    getSignature_asB64(): string;
    setSignature(value: Uint8Array | string): SignResponse;

    getStatus(): SignResponse.Status;
    setStatus(value: SignResponse.Status): SignResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SignResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SignResponse): SignResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SignResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SignResponse;
    static deserializeBinaryFromReader(message: SignResponse, reader: jspb.BinaryReader): SignResponse;
}

export namespace SignResponse {
    export type AsObject = {
        signature: Uint8Array | string,
        status: SignResponse.Status,
    }

    export enum Status {
    UNKNOWN = 0,
    SUCCEEDED = 1,
    DENIED = 2,
    FAILED = 3,
    }

}
