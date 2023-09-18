const express = require('express');

const {Config} = require('./src/config');
const {UsersAPI} = require('./src/users');

const app = express()

app.use(express.json())

UsersAPI(app)

app.use(express.static(__dirname))

app.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname + '/index.html'))
}) 

 app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname + '/login.html'))
}) 


app.listen(Config.port, () => {
    console.log(`servidor escuchando en el puerto ${Config.port}`);
})
