import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import Ira from '../imports/Ira'

render(
  (
    <BrowserRouter>
      <Ira />
    </BrowserRouter>
  ),
  document.getElementById('root')
)
