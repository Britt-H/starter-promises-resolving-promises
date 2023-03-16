const { welcome, goodbye, tell } = require("../utils/fortune-teller");
const question = "Will I be able to complete the 13 assessment?";
const tellPromise = tell(question);

welcome()
  .then(console.log)
  .then(goodbye)
  .then(console.log)
  .catch(console.error);
tellPromise.then((fortune) => {
  console.log(question);
  console.log(fortune);
});
