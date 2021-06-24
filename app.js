const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(express.static(__dirname + '/public'))
app.use(express.urlencoded({
  extended: true
}))

app.set("view engine", "ejs");


app.get('/', (req, res) => {
  res.render('index');
})
app.get('/login', (req, res) => {
    res.render('login');
  })
app.get('/productCart', (req, res) => {
    res.render('productCart');
  })
app.get('/productDetail', (req, res) => {
    res.render('productDetail');
  })
app.get('/register', (req, res) => {
    res.render('register');
  })
app.get('/index', (req, res) => {
    res.render('index');
  })

const port = process.env.PORT || 3003
app.listen(port , () => {
  console.log('App listening at http://localhost:${port}')
})



