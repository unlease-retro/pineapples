const UsersService = require('../user/service')

exports.create = (userEmail, delivery, callback) => {

  UsersService.read('any').then((users) => {

    for (var i = users.length - 1; i >= 0; i--) {

      const { _id, email, role } = users[i]

      if (email.toLowerCase() === userEmail.toLowerCase()) return callback(null, JSON.stringify({ _id, role, email }))

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

  res.send('<h1 style="text-align: center;margin-top: 20%">Magic link sent! Please check your inbox 😁</h1>')

  return next()

}
