import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import strings from './strings'

export default class IraIndex extends Component {
  render () {
    return (
      <div>
        <h1>{strings.ira.index.heading}</h1>
        <nav>
          <Link to={'/ira/signup'}>Sign up</Link>
          <span>&nbsp;|&nbsp;</span>
          <Link to={'/ira/login'}>Login</Link>
        </nav>
      </div>
    )
  }
}
