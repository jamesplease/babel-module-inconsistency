// This file demonstrates that running
// `node` and using `babel-register` will not use
// the Babel6+ export behavior; `test` will equal "foo",
// and not `{default: "foo"}`
require("babel-register");
require('./babel-node');
