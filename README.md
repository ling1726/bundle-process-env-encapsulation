# Consequences of encapsulating `process.env`

> Encapsulating `process.env` can have negative effects to bundle size

## Background

Repros the bundle size consequences of webpack with the below kind of code

```ts
if (process.env.NODE_ENV !== 'production') {

}

import { isProd } from './env';
if (!isProd) {

}
```

## Setup

This project uses:

* rollup with terser plugin
* webpack with terser plugin

To test the effects of bundling with encapsulated `process.env` checks

## Usage

* `npm install`
* `npm run build`
* Results should be in `output`


## Conclusion

Rollup is smart enough to remove dead code based on the variable value from another module.

Webpack implements some kind of internal dead code elimination for this
if `sideEffects: false` is applied to the project. This dead code elimination fails
as soon as the `if` condition checks a variable, even in the same file/module.
