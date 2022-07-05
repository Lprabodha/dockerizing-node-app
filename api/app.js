const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())

app.get('/', (req, res) => {
  res.json([
    {
      "id":"1",
      "title":"Laravel app"
    },
    {
      "id":"2",
      "title":"Node js app"
    },
    {
      "id":"3",
      "title":"Python app"
    }
  ])
})

app.listen(4000, () => {
  console.log('listening for requests on port 4000')
})