const express = require('express');
const { createServer } = require('node:http');

const app = express();
const server = createServer(app);
const cors = require('cors');

app.use(cors());

const SocketIO =require('socket.io')(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  }
})
SocketIO.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

app.get('/', (req, res) => {
  res.send('<h1>Hello World<h1>');
});

server.listen(3000, () => {
  console.log('server running at http://localhost:3000');
});
