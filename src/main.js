const { welcome, goodbye, tell } = require("../utils/fortune-teller");

welcome().then((result) => {
    console.log("The result is:", result)
})