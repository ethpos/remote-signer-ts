#!/usr/bin/env node
import { program } from 'commander'
import { readFileSync } from 'fs'
import { Client } from './client'
const config = require('../../package.json')

program
    .version(config.version)
    .description("An example CLI remote signing")
    .requiredOption('-c, --ca-cert <path>', 'Path to CA certificate')
    .requiredOption('-p, --port <number>', 'Port number of remote sign server')
    .option('-H, --host <address>', 'Host', '127.0.0.1')
    .option('--format <type>', 'json or plain', 'json')
    .command('list')
    .action((args) => {
        let ca
        try {
            ca = readFileSync(program.caCert)
        } catch (e) {
            console.error('Error loading CA cert')
            process.exit(1)
        }
        const client = new Client({
            host: program.host,
            port: program.port,
            caCert: ca,
        })
        client.listValidatingPublicKeys((err, pubkeys) => {
            if (err) {
                switch (err.code) {
                    case 14:
                        console.error('Connection unavailable')
                        break
                    default:
                        console.error(err.details)
                }
                process.exit(1)
            }
            const keys = pubkeys?.map(pubkey => pubkey.toString('hex'))
            switch (program.format) {
                case 'json':
                    console.log(keys)
                    break
                case 'plain':
                    keys?.forEach(key => console.log(key))
            }
        })
    })

program
    .command('sign')
    .requiredOption('--pubkey <string>', 'Public key in hex format')
    .requiredOption('-d, --data <string>', 'Data to sign')
    .action((args) => {
        let ca
        try {
            ca = readFileSync(program.caCert)
        } catch (e) {
            console.error('Error loading CA cert')
            process.exit(1)
        }
        const client = new Client({
            host: program.host,
            port: program.port,
            caCert: ca,
        })
        client.sign(
            Buffer.from(args.pubkey, 'hex'),
            Buffer.from(args.data, 'hex'),
            (err, result?: Buffer) => {
                if (err) {
                    switch (err.code) {
                        case 14:
                            console.error('Connection unavailable')
                            break
                        default:
                            console.error(err.details)
                    }
                    process.exit(1)
                }
                switch (program.format) {
                    case 'json':
                        console.log({ signature: result?.toString('hex') })
                        break
                    case 'plain':
                        console.log(result?.toString('hex'))
                }
            })
    })

program
    .parse(process.argv);
