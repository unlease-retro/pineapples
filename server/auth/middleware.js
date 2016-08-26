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

// Middleware for: Manager => can CRUD riders, SUPERUSER => can CRUD riders, managers, admins
exports.inhibit = (permittedRole) => ({
  toDealOnlyWith: (targetRole) =>
    (req, res, next) => {

      const { role: roleOfTheUserToBeCreated } = req.body
      const { role: roleOfTheCreatingUser } = JSON.parse(req.user)

      if (roleOfTheUserToBeCreated !== targetRole && roleOfTheCreatingUser === permittedRole) {

        // STOP
        res.sendStatus(401)

      }
      else {

        return next()

      }

    }
})






