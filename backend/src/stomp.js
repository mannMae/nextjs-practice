// import http from 'http';
// import Stomp from 'stomp-broker-js';

// const server = http.createServer();
// const stompServer = new Stomp({ server: server });

// server.listen(4444);

// stompServer.subscribe(
//   '/sub/chat',
//   function (msg, headers) {
//     const topic = headers.destination;
//     console.log(topic, '>', msg);
//   },
//   'headers'
// );

// stompServer.send('/test', {}, 'testMessage');

//=======================================
// import {
//   createStompServerSession,
//   StompClientCommandListener,
// } from 'stomp-protocol';
// import { Socket, createServer } from 'net';

// const testServer = (socket) => {
//   const listener = {
//     connect(headers) {
//       console.log('Connect!');
//       if (headers) {
//         server
//           .connected({ version: '1.2', server: 'MyServer/1.8.2' })
//           .catch(console.error);
//       } else {
//         console.log('Erroor!!!!!!!!!!!!');
//         server.error({ message: 'Invalid User' });
//       }
//     },
//     send(headers, body) {
//       console.log('Send!');
//     },
//     subscribe(headers) {
//       console.log('Subscribe!');
//     },
//     unsubscribe(headers) {
//       console.log('Unsubscribe!');
//     },
//     begin(headers) {
//       console.log(begin);
//     },
//     commit(headers) {
//       console.log('Commit!');
//     },
//     abort(headers) {
//       console.log('Abort');
//     },
//     ack(headers) {
//       console.log('Ack');
//     },
//     nack(headers) {
//       console.log('Nack');
//     },
//     disconnect(headers) {
//       console.log('Disconnect');
//     },
//     onProtocolError(error) {
//       server.error({ message: 'Invalid Error' });
//       console.log('Error...........');
//       console.error(error);
//     },
//     onEnd() {
//       console.log('End!');
//     },
//   };

//   const server = createStompServerSession(socket, listener);
// };

// const server = createServer(testServer);

// server.listen(4444, 'localhost');

import http from 'http';
import SocketIO from 'socket.io';
import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());

const httpServer = http.createServer(app);
const wsServer = SocketIO(httpServer, {
  cors: {
    origin: '*',
  },
});

wsServer.on('connection', (socket) => {
  console.log('Connect!');
});

const handleListen = () => console.log('Server is Running');

httpServer.listen(4444, handleListen);
