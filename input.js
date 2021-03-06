let connection;


const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};


const handleUserInput = (data) => {
  switch (data) {
  case ('\u0003'):
    process.exit();
    break;
  case ('w'):
    connection.write('Move: up');
    break;
  case ('s'):
    connection.write('Move: down');
    break;
  case ('a'):
    connection.write('Move: left');
    break;
  case ('d'):
    connection.write('Move: right');
    break;
  case ('h'):
    connection.write('Hello!!!');
    break;
  case ('t'):
    connection.write('ATTACK');
    break;
  case ('y'):
    connection.write('Y0HOO!');
    break;
  case ('o'):
    connection.write('OOPS!');
    break;
  }
};



module.exports = {setupInput};

