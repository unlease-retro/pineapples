/**
 * Created by BigaMasta on 8/18/16.
 */
exports.allowOnlyFor = (...roles) => {

  return (req, res, next) => {

    const user = JSON.parse(req.user)

    if (roles.indexOf(user.role.toUpperCase()) >= 0) {

      return next()

    }
    else {

      res.sendStatus(401)

    }

  }

}

exports.restrictFor = (...roles) => {

  return (req, res, next) => {

    const user = JSON.parse(req.user)

    if (roles.indexOf(user.role.toUpperCase()) >= 0) {

      res.sendStatus(401)

    }
    else {

      return next()

    }

  }

}
