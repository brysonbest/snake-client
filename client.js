const net = require('net');

const connect = function() {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });

  conn.setEncoding('utf8');
  //when data is received
  conn.on('data', (data) => {
    console.log(data);
  });

  //on connect
  conn.on('connect', () => {
    conn.write("Name: BJB");
    console.log("Successfully connected to game server.");
    //conn.write("Move: up");
  });
  return conn;
};

module.exports = {connect};