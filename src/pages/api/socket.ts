import { getSession } from 'next-auth/react';
import { Server } from 'socket.io';

export default async function SocketHandler(req, res) {
  const session = await getSession({ req });
  if (!session) {
    return res.end();
  }
  if (!session?.user?.email) {
    // TODO: redirect to login page
    // TODO: need to add in email and id to db
    return res.end();
  }

  // It means that socket server was already initialised
  if (res.socket.server.io) {
    // eslint-disable-next-line no-console
    console.log('Already set up');
    return res.end();
  }

  const io = new Server(res.socket.server);
  res.socket.server.io = io;

  const onConnection = (socket) => {
    // eslint-disable-next-line func-names
    socket.on('join', function (data) {
      socket.join(data.username); // We are using room of socket io
      setTimeout(() => {
        io.sockets
          .in(data.username)
          .emit('finishedprocessing', { msg: 'hello' });
      }, 10000);
    });
  };

  // Define actions inside
  io.on('connection', onConnection);

  // eslint-disable-next-line no-console
  console.log('Setting up socket');
  res.end();
}

// const typesDef = {
//   USER_EVENT: 'userevent',
//   EVENT_COMPLETE: 'finishedprocessing',
// };

// Need to move the below data to the db and load it on creation of this function.
// const clients = {};
// const users = {};
// const userActivity = [];

// const getUniqueID = () => {
//   const s4 = () =>
//     Math.floor((1 + Math.random()) * 0x10000)
//       .toString(16)
//       .substring(1);
//   return `${s4() + s4()}-${s4()}`;
// };

// const sendCompleteMessage = (client) => {
//   const json = {
//     type: typesDef.EVENT_COMPLETE,
//     filename: users[client].filename,
//   };
//   clients[client].sendUTF(JSON.stringify(json));
// };
