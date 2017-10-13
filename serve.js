const express = require('express')
// module provides a simple way to create an Express server that runs a GraphQL API.
const graphqlHTTP = require('express-graphql')
const app = express()

const schema = require('./schema')

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}))

app.listen(4000)
console.log('Listening ...')
