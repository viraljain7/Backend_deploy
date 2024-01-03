require('dotenv').config()
const express = require('express')
const app = express()
const port = 2345 || process.env.PORT;
//.env=> PORT=4000 in .env file

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