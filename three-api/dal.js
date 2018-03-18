const PouchDB = require('pouchdb-core')
PouchDB.plugin(require('pouchdb-adapter-mysql'))

const db = PouchDB('documentaries')

module.exports = {
  create: db.post.bind(db),
  update: db.put.bind(db),
  get: db.get.bind(db),
  all: db.allDocs.bind(db),
  remove: db.remove.bind(db)
}
