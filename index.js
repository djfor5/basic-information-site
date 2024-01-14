const express = require('express')

const app = express()

app.set('view engine', 'pug')

const HOST = 'localhost' // alternative: '127.0.0.1'
const PORT = 8000

app.get('/', (req, res) => {
  res.render('./index')
})

app.get('/about', (req, res) => {
  res.render('./about')
})

app.get('/contact-me', (req, res) => {
  res.render('./contact-me')
})

app.get('*', (req, res) => {
  res.status(404).render('./404')
})

app.listen(PORT, HOST, () => {
  console.log(`Server is running on http://${HOST}:${PORT}`);
})