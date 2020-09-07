// package: ethereum.validator.accounts.v2
// file: keymanager.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as keymanager_pb from "./keymanager_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

interface IRemoteSignerService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    listValidatingPublicKeys: IRemoteSignerService_IListValidatingPublicKeys;
    sign: IRemoteSignerService_ISign;
}

interface IRemoteSignerService_IListValidatingPublicKeys extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, keymanager_pb.ListPublicKeysResponse> {
    path: string; // "/ethereum.validator.accounts.v2.RemoteSigner/ListValidatingPublicKeys"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<keymanager_pb.ListPublicKeysResponse>;
    responseDeserialize: grpc.deserialize<keymanager_pb.ListPublicKeysResponse>;
}
interface IRemoteSignerService_ISign extends grpc.MethodDefinition<keymanager_pb.SignRequest, keymanager_pb.SignResponse> {
    path: string; // "/ethereum.validator.accounts.v2.RemoteSigner/Sign"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<keymanager_pb.SignRequest>;
    requestDeserialize: grpc.deserialize<keymanager_pb.SignRequest>;
    responseSerialize: grpc.serialize<keymanager_pb.SignResponse>;
    responseDeserialize: grpc.deserialize<keymanager_pb.SignResponse>;
}

export const RemoteSignerService: IRemoteSignerService;

export interface IRemoteSignerServer {
    listValidatingPublicKeys: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, keymanager_pb.ListPublicKeysResponse>;
    sign: grpc.handleUnaryCall<keymanager_pb.SignRequest, keymanager_pb.SignResponse>;
}

export interface IRemoteSignerClient {
    listValidatingPublicKeys(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: keymanager_pb.ListPublicKeysResponse) => void): grpc.ClientUnaryCall;
    listValidatingPublicKeys(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: keymanager_pb.ListPublicKeysResponse) => void): grpc.ClientUnaryCall;
    listValidatingPublicKeys(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: keymanager_pb.ListPublicKeysResponse) => void): grpc.ClientUnaryCall;
    sign(request: keymanager_pb.SignRequest, callback: (error: grpc.ServiceError | null, response: keymanager_pb.SignResponse) => void): grpc.ClientUnaryCall;
    sign(request: keymanager_pb.SignRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: keymanager_pb.SignResponse) => void): grpc.ClientUnaryCall;
    sign(request: keymanager_pb.SignRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: keymanager_pb.SignResponse) => void): grpc.ClientUnaryCall;
}

export class RemoteSignerClient extends grpc.Client implements IRemoteSignerClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public listValidatingPublicKeys(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: keymanager_pb.ListPublicKeysResponse) => void): grpc.ClientUnaryCall;
    public listValidatingPublicKeys(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: keymanager_pb.ListPublicKeysResponse) => void): grpc.ClientUnaryCall;
    public listValidatingPublicKeys(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: keymanager_pb.ListPublicKeysResponse) => void): grpc.ClientUnaryCall;
    public sign(request: keymanager_pb.SignRequest, callback: (error: grpc.ServiceError | null, response: keymanager_pb.SignResponse) => void): grpc.ClientUnaryCall;
    public sign(request: keymanager_pb.SignRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: keymanager_pb.SignResponse) => void): grpc.ClientUnaryCall;
    public sign(request: keymanager_pb.SignRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: keymanager_pb.SignResponse) => void): grpc.ClientUnaryCall;
}
