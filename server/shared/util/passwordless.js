const passwordless = require('passwordless')
const email = require('emailjs')
const RedisStore = require('passwordless-redisstore')
const config = require('../config')
const { HOST, PORT } = require('../../shared/constants')

const smtpServer = email.server.connect({
  user: config.get('mailer').user,
  password: config.get('mailer').password,
  host: config.get('mailer').smtp,
  port: 465,
  ssl: true
})

module.exports = (app) => {

  passwordless.init( new RedisStore(config.get('redis').port, config.get('redis').host), { allowTokenReuse: true })

  passwordless.addDelivery(
    (token, user, recipient, callback) => {

      const host = `${HOST}:${PORT}`

      // send token
      smtpServer.send({
        text: `Hello!\nYou can now access your account here: ${host}?token=${token}&uid=${encodeURIComponent(user)}`,
        from: config.get('mailer').user,
        to: recipient,
        subject: `Token for ${host}`
      }, (err) => {

        if (err) console.error(err)

        callback(err)

      })

    },
    { ttl: 1000*60*60*24 }
  )

  app.use(passwordless.sessionSupport())
  app.use(passwordless.acceptToken({ successRedirect: '/' }))

}
