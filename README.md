# ETHPOS Remote Signer

Remote signing gRPC server and client TypeScript implementation for the [Prysm](https://github.com/prysmaticlabs/prysm) Ethereum 2.0 client.  Created by [ETHPOS.io](https://ethpos.io)

## Overview

This is a simple, remote signing implementation to be used with the [Prysm](https://github.com/prysmaticlabs/prysm) project. It is **not** meant to be used in production deployments, but instead as an example of how to create a minimal remote-signer for eth2 validator keys in TypeScript.

## Installation
Install using npm:
``` bash
npm install -g @ethpos/remote-signer
```

Depending on your environment you might need sudo to install it globally.

## Usage

You need valid certificate files. Example certificates you can find in the certs folder of the repository.

### Server

If you install the package globally you can use the following command to get the options to run a remote signing server:

``` bash
ethpos-remote-signer -h
```

Available parameters:

- **--ca-crt-path**: (required) /path/to/ca.crt for secure TLS connections
- **--tls-crt-path**: (required) /path/to/server.crt for secure TLS connections
- **--tls-key-path**: (required) /path/to/server.key for secure TLS connections
- **--grpc-server-host**: (optional) host for the gRPC server, default 127.0.0.1
- **--grpc-port**: (optional) port for the gRPC server, default 4000

### Client

``` bash
ethpos-remote-signer-cli -h
```

Available parameters:

- **--ca-crt-path**: (required) /path/to/ca.crt for secure TLS connections
- **--grpc-server-host**: (optional) host for the gRPC server, default 127.0.0.1
- **--grpc-port**: (optional) port for the gRPC server, default 4000

### List Public Keys

``` bash
ethpos-remote-signer-cli list --ca-crt-path ./certs/ca.crt
```

### Sign

``` bash
ethpos-remote-signer-cli sign \
    --ca-crt-path ./certs/ca.crt \
    --pubkey a99a76ed7796f7be22d5b7e85deeb7c5677e88e511e0b337618f8c4eb61349b4bf2d153f649f7b53359fe8b94a38e44c \
    --data 677e88e511e0b337618f8c4eb61349b4bf2d153f649f7b53359fe8b94a38e44c
```

Available parameters:

- **--pubkey**: (required) Hex encoded public key
- **--data**: (required) Hex encoded data to sign

## Contributing

Contributions are very much welcome! Please fork the repository and create a pull request clearly explaining your feature, add tests, and sign our contributor licensing agreement which will automatically show up as a comment in your pull request. 

## License

MIT License

Copyright (c) 2020 ethpos

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.