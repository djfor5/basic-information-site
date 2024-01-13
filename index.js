const http = require('http')
const fs = require('fs')

const host = 'localhost' // alternative: '127.0.0.1'
const PORT = 8000

const server = http.createServer(function (req, res) {
  const urlObj = new URL(req.url, `http://${host}:${PORT}/`)
  // console.log(urlObj);
  
  const path = urlObj.pathname

  if (path === '/' || path === '/index' || path === '/index.html') {
    fs.readFile('./index.html', {encoding: 'utf8'}, (error, data) => {
      if (error) throw error
      res.writeHead(200, {'Content-Type': 'text/html'})
      res.write(data)
      res.end()
    })
  } else if (path === '/about' || path === '/about.html') {
    fs.readFile('./about.html', {encoding: 'utf8'}, (error, data) => {
      if (error) throw error
      res.writeHead(200, {'Content-Type': 'text/html'})
      res.write(data)
      res.end()
    })
  } else if (path === '/contact-me' || path === '/contact-me.html') {
    fs.readFile('./contact-me.html', {encoding: 'utf8'}, (error, data) => {
      if (error) throw error
      res.writeHead(200, {'Content-Type': 'text/html'})
      res.write(data)
      res.end()
    })
  } else {
    fs.readFile('./404.html', {encoding: 'utf8'}, (error, data) => {
      if (error) throw error
      res.writeHead(200, {'Content-Type': 'text/html'})
      res.write(data)
      res.end()
    })
  }
})

server.listen(PORT, host, () => {
  console.log(`Server is running on http://${host}:${PORT}`);
});