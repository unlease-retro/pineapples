const UsersService = require('../user/service')

exports.create = (userMail, delivery, callback) => {

  UsersService.read('any').then((users) => {

    users.map(user => {

      if (user.email === userMail) {


        return callback(null, { _id: user._id, role: user.role})

      }

    })

    return callback(null, null)

  })

}

