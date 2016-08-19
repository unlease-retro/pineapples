const UsersService = require('../user/service')

exports.create = (userEmail, delivery, callback) => {

  UsersService.read('any').then((users) => {

    users.map(user => {

      if (user.email === userEmail) {

        return callback(null, JSON.stringify({ _id: user._id, role: user.role}))

      }

    })

    return callback(null, null)

  })

}

