// server.js
import { WebSocketServer } from 'ws'; // もしくは CommonJS なら require('ws')
const wss = new WebSocketServer({ port: 8089 });
wss.on('connection', ws => {
  console.log('Client connected');
  ws.on('message', msg => {
    // 受け取ったメッセージを他クライアント全体に中継
    wss.clients.forEach(c => {
      if (c.readyState === c.OPEN) c.send(msg);
    });
  });
});
console.log('WebSocket server running on ws://localhost:8089');
