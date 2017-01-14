//Exports a function that creates a Socket.io server to index.js

import Server from 'socket.io';

//creates a Socket.io server, as well as a regular HTTP server bound to port 8020
export default function startServer(store) {
  const io = new Server().attach(8020);

//subscribe a listener to the store that reads the current state, turns it into a plain JS object,
//and emits it as a state event on the Socket.io server. The result will be that a JSON-serialized
//snapshot of the state is sent over all active Socket.io connections.
  store.subscribe(
    () => io.emit('state', store.getState().toJS())
  );

//We can listen to 'connection' events on our Socket.io server. We get one each time a
//client connects. In the event listener we can emit the current state right away:
  io.on('connection', (socket) => {
    socket.emit('state', store,getState().toJS());
//emit 'action' events that we feed directly into our Redux store:
    socket.on('action', store.dispatch.bind(store));
  });

}
