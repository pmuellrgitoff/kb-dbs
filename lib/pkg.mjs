// see: https://www.stefanjudis.com/snippets/how-to-import-json-files-in-es-modules-node-js/

import { createRequire } from "node:module"
const require = createRequire(import.meta.url)
export const pkg = require("../package.json")

// @ts-ignore
// import pkg from '../package.json' assert { type: 'json' }
// export { pkg }
