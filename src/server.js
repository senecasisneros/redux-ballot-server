//Exports a function that creates a Socket.io server to index.js

import Server from 'socket.io';

export default function startServer() {
  const io = new Server().attach(8020);
}
