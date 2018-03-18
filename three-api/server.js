require('dotenv').config()
const express = require('express')
const app = express()

app.use('/documentaries', require('./documentaries'))
app.use('/videos', require('./videos'))

app.get('/', (req, res) => res.send({ name: 'three-api' }))

app.listen(5000)
console.log('Three API is running on 5000')
