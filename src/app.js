
const express = require('express')
const cors = require('cors')
const { generatePositionGPS } = require('./helpers/coords')

const app = express()
app.use(cors())

app.get('/', (_, res) => {
    res.send("Server running")
})

app.get('/random-position', (_, res) => {
    res.send({
        success: true,
        data: generatePositionGPS()
    })
})

app.listen(3000)
