Babel 6.1.2 appears to have an inconsistency in how it transpiles ES2015
modules to CommonJS, specifically when the exported module uses
`export default`.

This example involves the module `test.js`, which is a simple file that
exports a string as the default value.

There are two behaviors that this repository shows.

### Correct behavior

The module should be exported as:

```js
{
  default: "foo"
}
```

This is observed when the source file is transpiled with the `babel` CLI
command.

A handy shortcut to observe this is to run `npm run babel-compile`.

### Incorrect behavior

The module is exported as:

```js
"foo"
```

This can be observed in two ways: using `babel-node` or using `babel-register`.

There are two shortcuts for running this:

- `npm run babel-node`
- `npm run babel-register`
