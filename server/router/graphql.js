import { Router } from 'express'
import bodyParser from 'body-parser'
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express'

import schema from '../schema'

const graphqlRouter = Router()

graphqlRouter
  .use(
    '/graphql',
    bodyParser.json(),
    graphqlExpress({schema})
  )
  .use(
    '/graphiql',
    graphiqlExpress({
      endpointURL: '/graphql'
    })
  )

export {
  graphqlRouter
}
