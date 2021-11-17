const {QUIT, MOVE_UP, MOVE_DOWN, MOVE_LEFT, MOVE_RIGHT, MESSAGES,} = require('./constants');
//stores the active TCP connection object.
let connection;

//function that takes in user input and returns an exit if it is CTRL+C
const handleUserInput = function(data) {
  if (data === QUIT) {
    process.exit();
  }
  if (data === MOVE_UP) {
    connection.write("Move: up");
  }
  if (data === MOVE_DOWN) {
    connection.write("Move: down");
  }
  if (data === MOVE_LEFT) {
    connection.write("Move: left");
  }
  if (data === MOVE_RIGHT) {
    connection.write("Move: right");
  }
  if (MESSAGES[data] !== undefined) {
    connection.write(MESSAGES[data]);
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