const UsersService = require('../user/service')

exports.create = (userMail, delivery, callback) => {

  UsersService.read('any').then((users) => {

    users.map(user => {

      if (user.email === userMail) {

        return callback(null, user._id)

      }

    })

    return callback(null, null)

  })

}

