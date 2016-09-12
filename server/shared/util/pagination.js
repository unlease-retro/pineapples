const { pageLimit } = require('../constants')
exports.mapPageToSkipAndLimit = (page = 0) => ({
  skip: page * pageLimit,
  limit: pageLimit
})

