//function that takes in user input and returns an exit if it is CTRL+C
const handleUserInput = function(data) {
  if (data === '\u0003') {
    process.exit();
  }
};
//function that takes in user input
const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

module.exports = {setupInput};