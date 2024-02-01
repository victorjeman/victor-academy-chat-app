import { WebSocket, WebSocketServer } from 'ws'
import http from 'http'
import { uuid } from 'uuidv4'
import fetch from 'node-fetch'

const server = http.createServer()
const wsServer = new WebSocketServer({ server })
const PORT = 8000

server.listen(PORT, () => {
  console.log(`WebSocket server is running on port ${PORT}`)
})

const clients = {}

function broadcastMessage(json) {
  const data = JSON.stringify(json)

  for (let userId in clients) {
    let client = clients[userId]
    const clientIsOpen = client.readyState === WebSocket.OPEN
    if (clientIsOpen) client.send(data)
  }
}

function handleDisconnect(userId) {
  delete clients[userId]
}

async function saveMessageInDB(payload) {
  try {
    await fetch('http://localhost:3000/messages', {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (error) {
    console.log(error)
  }
}

wsServer.on('connection', (connection) => {
  const userId = uuid()
  clients[userId] = connection

  connection.on('message', async (message) => {
    const dataFromClient = JSON.parse(message.toString())

    await saveMessageInDB(dataFromClient)
    broadcastMessage(dataFromClient)
  })

  connection.on('close', () => handleDisconnect(userId))
})
