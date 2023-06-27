# es-checker

> Check ES6 ES7 ES8 ES9 ES10 ES11 ES12.....

Check whether ES syntax and APIs are used in the code.

In the actual development situation, there are some need to check whether the latest ES syntax are used in the code to  decide if compatibility processing is required, such as in mini-programs, some older websites, and so on.

# Usage

## Install

```sh
yarn add es-checker
```

## How to use

function type
```ts
type ecmaCheck = (filesArgs: string | string[], target: EcmaVersionType = 'es6', config: ConfigType) => void
```

import
```ts
import ecmaCheck from 'es-checker'
```

file
```
// single file
ecmaCheck('a.js', 'es6')

// mut files
ecmaCheck(['a.js', 'b.js'], 'es6')
```

target
```ts
ecmaCheck('a.js', 'es7')
```

config: (fast-glob options)
```ts
ecmaCheck('a.js', 'es7', {
  dir: '',
  ignore: []
})
```

## Type

### EcmaVersionType
```ts
export type EcmaVersionType = 'es6' | 'es7' | 'es8' | 'es9' | 'es10' | 'es11' | 'es12' | 'es2015' | 'es2016' | 'es2017' | 'es2018' | 'es2019' | 'es2020' | 'es2021'
```

### ConfigType
```ts
type ConfigType = {
  dir?: string;  // cwd
  ignore?: string | string[]; // some files to ignore
}
```


