import { ConfigType, CorCheckOptionsType, EcmaVersionType } from "./type"
import { logger } from "./utils/logger"
import { getRealEcmaVersion } from './utils'


const fg = require('fast-glob')
const fs = require('fs-extra')
const path = require('path')
const babelParser = require('@babel/parser')
const traverse = require('@babel/traverse').default


const coreCheck = async (files: string[], options: CorCheckOptionsType) => {
  const { dir = './' } = options

  console.log('[es-checker] search files...')
  const fileNames: string[] = await fg(files, {
    cwd: dir,
    onlyFiles: true
  })
  console.log('[es-checker] some files to be queried', fileNames)
  // const esFiles = [];
  fileNames.forEach(async file => {
    const fullPath = path.join(dir, file)

    const code = await fs.readFile(fullPath, 'utf8')

    const ast = babelParser.parse(code, {
      sourceType: 'module',
      plugins: ['jsx', 'typescript']
    })

    traverse(ast, {
      enter(path: any) {
        console.error('enterPath', path.node.type)
      }
    })

  })
}



const ecmaCheck = (filesArgs: string | string[], target: EcmaVersionType = 'es6', config: ConfigType) => {
  if (!filesArgs) {
    return logger.warn('filesArgs cannot be empty.')
  }
  let files = []
  if (typeof filesArgs === 'string') {
    files = [filesArgs]
  } else {
    files = filesArgs
  }

  console.log('[es-checker] confirm es version...')
  const esVersion = getRealEcmaVersion(target)
  console.log(`[es-checker] es version confirmed: ${esVersion}`)

  const options = {
    target: esVersion,
    ...config
  }
  coreCheck(files, options)

}


export default ecmaCheck;


ecmaCheck('test1.js', 'es6', {
  dir: 'test/es6'
})
