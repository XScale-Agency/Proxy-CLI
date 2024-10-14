#!/usr/bin/env node

import { kernel } from './src/kernel.js'

await kernel.handle(process.argv.splice(2))
