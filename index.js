'use strict'

const express = require('express')
const app = express()

app.get('/', (_req, res) => {
  res.send('Hello world!')
})

app.listen(3000, () => {a
  console.log('Server is listening on 3001 port')
})