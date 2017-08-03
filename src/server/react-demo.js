import { renderToString } from 'react-dom/server'
import React from 'react'
import express from 'express'

import ReactDemoPage from '../imports/ReactDemoPage'
import strings from '../imports/strings'

import config from './react-demo.config'
import template from './main.template'

export default (app) => {
  const pathname = '/react-demo'
  const router = express.Router()

  router.get('/', (req, res) => {
    const message = 'This is from the server.'
    const initialState = { message }
    const body = renderToString(<ReactDemoPage {...initialState} />)

    const page = template({
      body: body,
      initialState: JSON.stringify(initialState),
      scriptSrcs: config.scriptSrcs,
      title: strings.reactDemo.title
    })

    res.send(page)
  })

  app.use(pathname, router)
}
