const express = require('express');
const mysql = require('mysql')
const cors = require('cors')

const app = express()
app.use(cors())
con

app.get('/', (req, res) => {
    return res.json("From backend side");
})
app.listen(8081, () => {
    console.log("listening");
})