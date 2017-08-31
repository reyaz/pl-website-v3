import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'

import Ira from '../imports/Ira'
import strings from '../imports/strings'
import template from './main-template'

export default (app) => {
  const pathname = '/ira'
  const router = express.Router()

  router.get('*', (req, res) => {
    const context = {}

    const body = renderToString(
      <StaticRouter
        location={req.originalUrl}
        context={context}
      >
        <Ira />
      </StaticRouter>
    )

    const getTitle = (req) => {
      function parsePageKey (req) {
        return req._parsedUrl.pathname.replace('/', '')
      }

      const defaultTitle = strings.ira.index.title
      const pageKey = parsePageKey(req)

      if (typeof strings.ira[pageKey] !== 'object') {
        return defaultTitle
      }

      if (typeof strings.ira[pageKey].title !== 'string') {
        return defaultTitle
      }

      return strings.ira[pageKey].title
    }

    const page = template({
      body: body,
      scriptSrcs: ['/assets/ira.bundle.js'],
      title: getTitle(req)
    })

    res.send(page)
  })

  app.use(pathname, router)
}
