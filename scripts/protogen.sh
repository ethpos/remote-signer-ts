#!/bin/bash

# BASEDIR=$(dirname "$0")
# cd ${BASEDIR}/../

PROTO_DEST=./protos

mkdir -p ${PROTO_DEST}
# mkdir -p ${PROTO_DEST}/google/api

# yarn run grpc_tools_node_protoc \
#     --js_out=import_style=commonjs,binary:${PROTO_DEST}/google/api \
#     --grpc_out=${PROTO_DEST}/google/api \
#     --plugin=protoc-gen-grpc=./node_modules/.bin/grpc_tools_node_protoc_plugin \
#     -I ./node_modules/google-proto-files \
#     --proto_path=./node_modules/google-proto-files/google/api \
#     annotations.proto
    
# yarn run grpc_tools_node_protoc \
#     --js_out=import_style=commonjs,binary:${PROTO_DEST}/google/api \
#     --grpc_out=${PROTO_DEST}/google/api \
#     --plugin=protoc-gen-grpc=./node_modules/.bin/grpc_tools_node_protoc_plugin \
#     -I ./node_modules/google-proto-files \
#     --proto_path=./node_modules/google-proto-files/google/api \
#     http.proto

# cp -r ./node_modules/google-proto-files/google ./proto/

# JavaScript code generation
protoc \
    --js_out=import_style=commonjs,binary:${PROTO_DEST} \
    --grpc_out=${PROTO_DEST} \
    --plugin=protoc-gen-grpc=./node_modules/.bin/grpc_tools_node_protoc_plugin \
    -I ./src/proto \
    -I ./node_modules/google-proto-files \
    --proto_path=./node_modules/google-proto-files \
    google/api/http.proto

protoc \
    --js_out=import_style=commonjs,binary:${PROTO_DEST} \
    --grpc_out=${PROTO_DEST} \
    --plugin=protoc-gen-grpc=./node_modules/.bin/grpc_tools_node_protoc_plugin \
    -I ./src/proto \
    -I ./node_modules/google-proto-files \
    --proto_path=./node_modules/google-proto-files \
    google/api/annotations.proto

protoc \
    --js_out=import_style=commonjs,binary:${PROTO_DEST} \
    --grpc_out=${PROTO_DEST} \
    --plugin=protoc-gen-grpc=./node_modules/.bin/grpc_tools_node_protoc_plugin \
    -I ./src/proto \
    -I ./node_modules/google-proto-files \
    --proto_path=./node_modules/google-proto-files \
    ./src/proto/*.proto

# TypeScript code generation
protoc \
    --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
    --ts_out=${PROTO_DEST} \
    -I ./src/proto \
    -I ./node_modules/google-proto-files \
    --proto_path=./node_modules/google-proto-files \
    ./src/proto/*.proto