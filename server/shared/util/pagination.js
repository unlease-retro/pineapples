const { pageLimit } = require('../constants')
exports.mapPageToSkipAndLimit = (page = 1) => ({
  skip: (page - 1) * pageLimit,
  limit: pageLimit
})

