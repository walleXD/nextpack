import express from 'express'
import next from 'next'

import { apiRouter, graphqlRouter } from './server/router'
import conf from './client/next.config'

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev, dir: './client', conf })
const server = express()
const handle = app.getRequestHandler()

const start = async () => {
  await app.prepare()

  server
    .use(graphqlRouter)
    .use('/api', apiRouter)
    .get('*', (req, res) => {
      return handle(req, res)
    })
    .listen(3000, (err) => {
      if (err) throw err
      console.log('> Ready on http://localhost:3000')
    })
}

start()
