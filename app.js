const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(express.static(__dirname + '/public'))
app.use(express.urlencoded({
  extended: true
}))

app.get('/', (req, res) => {
  res.sendFile('./index.html', { root: 'views'})
})
app.get('/login', (req, res) => {
    res.sendFile('./login.html', { root: 'views'})
  })
  app.get('/productCart', (req, res) => {
    res.sendFile('./productCart.html', { root: 'views'})
  })
  app.get('/productDetail', (req, res) => {
    res.sendFile('./productDetail.html', { root: 'views'})
  })
  app.get('/register', (req, res) => {
    res.sendFile('./register.html', { root: 'views'})
  })

const port = process.env.PORT || 3003
app.listen(port , () => {
  console.log('App listening at http://localhost:${port}')
})



