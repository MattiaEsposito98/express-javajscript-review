const express = require('express')
const cors = require('cors')

const app = express()
const port = 3000

app.use(cors())

app.get('/', (req, res) => {
  res.send('Ciao express')
})

app.get('/api/names', (req, res) => {
  const names = ['Mattia', 'Nicola', 'Giovanni', 'Pasquale', 'Giuseppe']
  res.send(names)
})

app.listen(port, () => {
  console.log(`Server in ascolto su http://localhost:${port}`);
})