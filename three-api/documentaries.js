const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const dal = require('./dal')
const { pluck } = require('ramda')

module.exports = app

app.post('/', bodyParser.json(), (req, res) => {
  // get new documentary
  dal
    .create(req.body)
    .then(result => res.send(result))
    .catch(err => res.status(500).send({ error: err.message }))
})

app.get('/', (req, res) => {
  dal
    .all({ include_docs: true, limit: 100 })
    .then(results => pluck('doc', results.rows))
    .then(docs => res.send(docs))
    .catch(err => res.status(500).send({ error: err.message }))
})

app.get('/:id', (req, res) => {
  dal
    .get(req.params.id)
    .then(doc => res.send(doc))
    .catch(err => res.status(500).send({ error: err.message }))
})
