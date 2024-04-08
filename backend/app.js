const express = require("express");
const cors = require("cors");
const { db } = require("./db/ds");
const { readdirSync } = require('fs');
const { route } = require("./routes/transaction");

const app = express()
require('dotenv').config()

const PORT = process.env.PORT

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send("Alive")
})

readdirSync('./routes').map((route) => app.use('/api/v1', require('./routes/' + route)))

const server = () => {
    db()
    app.listen(PORT, () => {
        console.log("We  hear you Port:", PORT);

    })

}

server()