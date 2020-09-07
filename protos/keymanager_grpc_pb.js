// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var keymanager_pb = require('./keymanager_pb.js');
var google_api_annotations_pb = require('./google/api/annotations_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');

function serialize_ethereum_validator_accounts_v2_ListPublicKeysResponse(arg) {
  if (!(arg instanceof keymanager_pb.ListPublicKeysResponse)) {
    throw new Error('Expected argument of type ethereum.validator.accounts.v2.ListPublicKeysResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ethereum_validator_accounts_v2_ListPublicKeysResponse(buffer_arg) {
  return keymanager_pb.ListPublicKeysResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ethereum_validator_accounts_v2_SignRequest(arg) {
  if (!(arg instanceof keymanager_pb.SignRequest)) {
    throw new Error('Expected argument of type ethereum.validator.accounts.v2.SignRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ethereum_validator_accounts_v2_SignRequest(buffer_arg) {
  return keymanager_pb.SignRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ethereum_validator_accounts_v2_SignResponse(arg) {
  if (!(arg instanceof keymanager_pb.SignResponse)) {
    throw new Error('Expected argument of type ethereum.validator.accounts.v2.SignResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ethereum_validator_accounts_v2_SignResponse(buffer_arg) {
  return keymanager_pb.SignResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}


// RemoteSigner service API.
//
// Defines a remote-signing keymanager which manages eth2
// validator accounts and can sign respective messages.
var RemoteSignerService = exports.RemoteSignerService = {
  // ListPublicKeysResponse managed by a remote signer.
listValidatingPublicKeys: {
    path: '/ethereum.validator.accounts.v2.RemoteSigner/ListValidatingPublicKeys',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: keymanager_pb.ListPublicKeysResponse,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_ethereum_validator_accounts_v2_ListPublicKeysResponse,
    responseDeserialize: deserialize_ethereum_validator_accounts_v2_ListPublicKeysResponse,
  },
  // Sign a remote request via gRPC.
sign: {
    path: '/ethereum.validator.accounts.v2.RemoteSigner/Sign',
    requestStream: false,
    responseStream: false,
    requestType: keymanager_pb.SignRequest,
    responseType: keymanager_pb.SignResponse,
    requestSerialize: serialize_ethereum_validator_accounts_v2_SignRequest,
    requestDeserialize: deserialize_ethereum_validator_accounts_v2_SignRequest,
    responseSerialize: serialize_ethereum_validator_accounts_v2_SignResponse,
    responseDeserialize: deserialize_ethereum_validator_accounts_v2_SignResponse,
  },
};

exports.RemoteSignerClient = grpc.makeGenericClientConstructor(RemoteSignerService);
