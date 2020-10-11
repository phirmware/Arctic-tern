const server = require('./server')
const PORT = process.env.PORT || 3000

server(PORT, () => console.log(`Listening on port ${PORT}`))
