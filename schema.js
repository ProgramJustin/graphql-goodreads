const fetch = require('node-fetch')


const x = fetch(
  'http://www.goodreads.com/author/show.xml?id=4432&key=risKm8wwXsIcyEiTktvA'
)
.then(response => response.text())
