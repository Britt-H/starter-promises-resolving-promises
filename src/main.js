const { welcome, goodbye, tell } = require("../utils/fortune-teller");

const promise = welcome();

promise.then(console.log)
console.log("line 6")