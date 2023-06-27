import { EcmaVersionType } from "../type"
import { logger } from "./logger"

export const getRealEcmaVersion = (target: EcmaVersionType) => {
  let ecmaVersion = ''
  switch (target) {
    case 'es6':
    case 'es7':
    case 'es8':
    case 'es9':
    case 'es10':
    case 'es11':
    case 'es12':
      ecmaVersion = target
      break
    case 'es2015':
      ecmaVersion = 'es6'
      break
    case 'es2016':
      ecmaVersion = 'es7'
      break
    case 'es2017':
      ecmaVersion = 'es8'
      break
    case 'es2018':
      ecmaVersion = 'es9'
      break
    case 'es2019':
      ecmaVersion = 'es10'
      break
    case 'es2020':
      ecmaVersion = 'es11'
      break
    case 'es2021':
      ecmaVersion = 'es12'
      break
    default:
      logger.error('Invalid ecmaScript version, The default version(es6) will be selected.')
      ecmaVersion = 'es6'
  }
  return ecmaVersion;
}