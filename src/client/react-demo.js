import React from 'react'
import { render } from 'react-dom'

import ReactDemoPage from '../imports/ReactDemoPage'

const pageState = window.__APP_INITIAL_STATE__

const updatePage = () => {
  render(
    <ReactDemoPage {...pageState} />,
    document.getElementById('root')
  )
}

updatePage()

setTimeout(function () {
  pageState.message = 'Updated after 3 sec.'
  updatePage()
}, 3000)
