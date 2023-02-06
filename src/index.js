import { execSync } from 'node:child_process'

const prismaBinary = './node_modules/.bin/prisma';

// creating databases
execSync('docker compose up -d')

// run migrations
execSync(`${prismaBinary} migrate deploy --schema=./src/cards/prisma/schema.prisma`)
execSync(`${prismaBinary} migrate deploy --schema=./src/images/prisma/schema.prisma`)
execSync(`${prismaBinary} migrate deploy --schema=./src/collections/prisma/schema.prisma`)