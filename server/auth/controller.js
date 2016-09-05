const UsersService = require('../user/service')

exports.create = (userEmail, delivery, callback) => {

  UsersService.read('any').then((users) => {

    for (var i = users.length - 1; i >= 0; i--) {

      if (users[i].email.toLowerCase() === userEmail.toLowerCase()) {

        return callback(null, JSON.stringify({ _id: users[i]._id, role: users[i].role}))

      }

    }

    return callback(null, null)

  })

}

exports.read = (req, res, next) => {

  const user = JSON.parse(req.user)

  res.json({ user })

  return next()

}

exports.success = (req, res, next) => {

  res.send('email sent!')

  return next()

}
