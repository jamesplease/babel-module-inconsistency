// This file demonstrates that running
// `babel-node` will not use the Babel6+ export
// behavior; `test` will equal "foo", and not
// `{default: "foo"}`
import test from './test';

console.log('test', test);
