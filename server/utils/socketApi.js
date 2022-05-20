import { Server } from 'socket.io';
const io = new Server();

io.on('connection', (socket) => {
  console.log('A user connected');
  
  socket.on('ping', () => {
    socket.emit('ping', 'pong');
  })
});

export default io;