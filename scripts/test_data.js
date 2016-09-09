/**
  * @desc Generate [limit] test pineapples
  * @usage `node scripts/test_data.js`
*/

const jsonfile = require('jsonfile')
const faker = require('faker')
const geojson = require('@turf/random')

jsonfile.spaces = 2

const bbox = [ -0.489, 51.28, 0.236, 51.686 ]
const file = './tmp/data.json'

let limit = 300
let data = []

while (limit--) {

  const { features: [ { geometry: location } ]} = geojson('point', 1, { bbox })

  data.push({
    streetAddress: faker.address.streetAddress(),
    city: 'London',
    country: 'UK',
    postcode: 'E1 6BT',
    from: faker.name.findName(),
    to: faker.name.findName(),
    message: faker.company.bs(),
    senderEmail: faker.internet.email(),
    companyName: faker.company.companyName(),
    location,
    dispatched: false,
    delivered: false,
    deliverable: true,
    attempts: 0,
    createdAt: new Date(),
    updatedAt: new Date(),
  })

}

jsonfile.writeFile(file, data, err => err ? console.error(err) : console.log('🍍  done') )
