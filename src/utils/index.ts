import { EcmaVersionType } from "../type"
import { logger } from "./logger"

export const getRealEcmaVersion = (target: EcmaVersionType) => {
  let ecmaVersion = ''
  switch (target) {
    case 'es6':
      ecmaVersion = '6'
      break
    case 'es7':
      ecmaVersion = '7'
      break
    case 'es8':
      ecmaVersion = '8'
      break
    case 'es9':
      ecmaVersion = '9'
      break
    case 'es10':
      ecmaVersion = '10'
      break
    case 'es11':
      ecmaVersion = '11'
      break
    case 'es12':
      ecmaVersion = '12'
      break
    case 'es2015':
      ecmaVersion = '6'
      break
    case 'es2016':
      ecmaVersion = '7'
      break
    case 'es2017':
      ecmaVersion = '8'
      break
    case 'es2018':
      ecmaVersion = '9'
      break
    case 'es2019':
      ecmaVersion = '10'
      break
    case 'es2020':
      ecmaVersion = '2020'
      break
    case 'es2021':
      ecmaVersion = '2021'
      break
    case 'es2022':
      ecmaVersion = '2022'
      break
    case 'es2023':
      ecmaVersion = '2023'
      break
    default:
      logger.error('Invalid ecmaScript version, The default version(es6) will be selected.')
      ecmaVersion = '6'
  }
  return ecmaVersion;
}