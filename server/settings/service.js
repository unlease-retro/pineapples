const Settings = require('./model')

exports.read = () => {

  return Settings.find({}).lean()

}

exports.update = props => {

  return Settings.findOneAndUpdate({}, Object.assign({}, props), { new: true })

}

exports.isDailyLimitReached = (count) => {

  return Settings.findOne({}).then((setting) => {
    
    let isLimitReached = false
    if (setting.dailyLimit <= count)
      isLimitReached = true
    return Promise.resolve(isLimitReached)

  })

}

exports.numPineappleLeftToday = (count) => {

  return Settings.findOne({}).then((setting) => {
    
    let numLeft = setting.dailyLimit - count
    
    return Promise.resolve(numLeft < 0 ? 0 : numLeft)

  })

}