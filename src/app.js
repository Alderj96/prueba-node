
const express = require('express')

const app = express()

app.get('/', (_, res) => {
    res.send(" Server runing...")
})


app.listen(3000)
