Babel 6.1.2 appears to have an inconsistency in how it transpiles ES2015
modules to CommonJS, specifically when the exported module uses
`export default`.

This example involves the module `test.js`, which is a simple file that
exports a string as the default value.

There are two behaviors that this repository shows:

- Transpiling with the `babel` CLI command returns the correct result. To see
  this, run `npm run babel-compile`
- Transpiling with `babel-node` yields pre-Babel6 behavior for modules. To see
  this, run `npm run babel-node`
- Using `babel-register` results in the same problem as `babel-node`. Execute
  `npm run babel-register` to see this behavior
