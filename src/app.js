
const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())

app.get('/', (_, res) => {
    res.send("Server running")
})


app.listen(3000)
