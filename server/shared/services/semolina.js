/**
  * @desc Auto clustering service - just like eating semolina 🍰
*/

const ClusterService = require('../../cluster/service')

const Semolina = () => {

  const promises = []

  // clear existing clusters data before insert
  promises.push(ClusterService.removeAll())

  // run auto clustering


  // auto allocate to nearest depot based on cluster center

  // insert cluster into separate collection/document (with unique and user friendly id)

  Promise.all(promises).then(() => {
    
  })
}

module.exports = Semolina
