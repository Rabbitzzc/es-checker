export type ConfigType = {
  dir?: string;  // cwd
  ignore?: string | string[]; // some files to ignore
}

export type EcmaVersionSimpleType = 'es6' | 'es7' | 'es8' | 'es9' | 'es10' | 'es11' | 'es12'
export type EcmaVersionTotalType = 'es2015' | 'es2016' | 'es2017' | 'es2018' | 'es2019' | 'es2020' | 'es2021' | 'es2022' | 'es2023'
export type EcmaVersionType = EcmaVersionSimpleType | EcmaVersionTotalType


export type CorCheckOptionsType = {
  target: string;
  files: string[];
} & ConfigType;
