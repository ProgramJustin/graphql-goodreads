// node-fetch module fetches data from restAPI
const fetch = require('node-fetch')
// convert call back to a promise
const util = require('util')
// module xml2js coverts xml to json
const parseXML = util.promisify(require('xml2js').parseString)
// const parseXML = require('xml2js').parseString
const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString
} = require('graphql')


// xml response
const x = fetch(
  'https://reqres.in/api/users'
)
.then(response => response.text()
)
.then(parseXML)

x
const UserType = new GraphQLObjectType({
  name: 'User',
  description: '...',
  fields: () => ({
    name: {
      type: GraphQLString
    }
  })
})

module.exports = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    description: '...',
    fields: () => ({
      users: {
        type: UserType,
        args: {
          id: { type: GraphQLInt }
        },
        
      }
    })
  })
})
