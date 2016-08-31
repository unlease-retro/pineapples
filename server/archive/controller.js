const Archive = require('./service')

exports.create = (req, res, next) => {

  return Archive.create(req.body)
    .then( cluster => {

      res.json({ cluster })

      res.sendStatus(200)

      return next()

    }, e => next(e) )

}

exports.read = (req, res, next) => {

  const { id } = req.params

  return Archive.read(id)
    .then( cluster => {

      res.json({ cluster })

      return next()

    }, e => next(e) )

}
