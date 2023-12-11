const { app } = require('./server');

const handleListen = (portNumber) => {
  console.log(`Running on ${portNumber} Port`);
};

app.listen(4000, handleListen(4000));
