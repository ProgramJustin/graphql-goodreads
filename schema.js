// node-fetch module fetches data from restAPI
const fetch = require('node-fetch')
// convert call back to a promise
const util = require('util')
// module xml2js
util.promisify(require('xml2js').parseString)

// xml response
const x = fetch(
  'http://www.goodreads.com/author/show.xml?id=4432&key=risKm8wwXsIcyEiTktvA'
)
.then(response => response.text())
x
console.log(x)
