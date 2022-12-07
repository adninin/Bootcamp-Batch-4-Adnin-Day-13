//Require morgan
//const morgan = require('morgan')

//Require express
const express = require('express')

//Require ejs layout
const expressLayouts = require('express-ejs-layouts')

//Require function 
const { loadContact, findContact } = require('./new/contacts')

const app = express()
const port = 1234

//Setup view engine ejs
app.set('view engine', 'ejs')

//Setup express layout ejs
app.use(expressLayouts)

//Setup express ejs
app.use(express.static('public'));

//Setup morgan ejs
//app.use(morgan('dev'))

//Menggunakan middleware
// app.use((req, res, next) => {
//   console.log('Time:', Date.now())
//   next()
// })

//Menghubungkan ke index.ejs (tampilan awal)
app.get('/', (req, res) => {
  res.render('index', 
  //value yang dikirim ke index.ejs
  { nama: 'Anin', 
  title: 'Home Page',
  layout: 'layout/lay'}) 
})

//Menghubungkan ke about.ejs
app.get('/about', (req, res) => {
  res.render('about',
   //value yang dikirim ke about.ejs
 { title: 'About Page',
   layout: 'layout/lay'})
   //next()
})

//Menghubungkan ke contact.ejs
app.get('/contact', (req, res) => {
  //Membuat variable contact
  const contacts = loadContact()

//Menampilkan file contact.ejs ke browser
res.render('contact', {
   //value yang dikirim ke contact.ejs
  title:'Contact Page',
  layout: 'layout/lay',
  contacts,
   })
})

//Menghubungkan ke contact,ejs
app.get('/contact/:nama', (req, res) => {
  //Function find contact
  const contact = findContact(req.params.nama)

//Menampilkan file detail.ejs ke browser
res.render('detail', {
   //value yang dikirim ke contact.ejs
  title:'Detail Contact Page',
  layout: 'layout/lay',
  contact,
  nama: req.params.nama,
   })
})

//app.get('/product/:id', (req, res) => {
 // res.send(`product id : ${req.params.id} <br> category id : ${req.query.category}`)
//})

//Error
app.use('/', (req, res) => {
  res.status(404)
  res.send('Error : Page not found!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

