require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 2345;
// process.env.PORT=3434;

app.get('/', function (req, res) {
    res.send('Hello World')
})
app.get('/login', function (req, res) {
    res.send(`<h1>Login please</h1>`)
})
app.get('/about', function (req, res) {
    res.send('About Section')
})
app.get('/help', function (req, res) {
    res.send('<h1>Helpline Number: 9038893028</h1>')
})

app.listen(port, () => {
    console.log(`Example App listen on ${port}`);
})