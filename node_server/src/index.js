const express = require('express')
const app = express()
const cors = require('cors')
const port = 80


const quotes = require('./quotes')

app.use(cors())

app.get('/', (req, res) => {
  res.send(quotes.randomQuote())
})

app.listen(port, () => {
  console.log(`Node server listening on port XX ${port}`)
})


