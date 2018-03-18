const aws = require('aws-sdk')
const express = require('express')
const multer = require('multer')
const multerS3 = require('multer-s3')
const request = require('request')

const app = express()

const s3 = new aws.S3({
  accessKeyId: process.env.AWS_KEY,
  secretAccessKey: process.env.AWS_SECRET,
  region: 'us-east-1'
})

const upload = multer({
  storage: multerS3({
    s3,
    bucket: 'three-videos',
    acl: 'public-read',
    metadata: function(req, file, cb) {
      cb(null, { fieldname: file.fieldname })
    },
    key: function(req, file, cb) {
      console.log('fileInfo: ', file)
      cb(null, file.originalname)
    }
  })
})

app.post('/', upload.single('video'), (req, res) => {
  res.send({ ok: true })
})

app.get('/:file', (req, res) => {
  request('https://s3.amazonaws.com/three-videos/' + req.params.file).pipe(res)
})

module.exports = app
