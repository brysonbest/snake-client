//stores the active TCP connection object.
let connection;

//function that takes in user input and returns an exit if it is CTRL+C
const handleUserInput = function(data) {
  if (data === '\u0003') {
    process.exit();
  }
  if (data === '\u0057' || data === '\u0077') {
    connection.write("Move: up");
  }
  if (data === '\u0053' || data === '\u0073') {
    connection.write("Move: down");
  }
  if (data === '\u0041' || data === '\u0061') {
    connection.write("Move: left");
  }
  if (data === '\u0044' || data === '\u0064') {
    connection.write("Move: right");
  }
};
//function that takes in user input
const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

module.exports = {setupInput};