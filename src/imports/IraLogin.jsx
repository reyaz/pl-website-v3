import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import strings from './strings'

export default class IraLogin extends Component {
  render () {
    return (
      <div>
        <h1>{strings.ira.login.heading}</h1>
        <Link to={'/ira/success'}>Submit</Link>
        <hr />
        <Link to={'/ira/signup'}>Sign up</Link>
      </div>
    )
  }
}
