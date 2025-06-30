const express = require('express')
const dotenv = require('dotenv')
dotenv.config()

const togetticket = require('./router/getdata.js')
const topostticket = require('./router/postdata.js')

const app = express()

app.use(express.json())

app.use('/get', togetticket )
app.use('/post', topostticket )

const port = process.env.PORT || 6000


app.listen(port, () => console.log(`Example app listening on port ${port}!`))