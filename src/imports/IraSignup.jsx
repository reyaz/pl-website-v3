import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import strings from './strings'

export default class IraSignup extends Component {
  render () {
    return (
      <div>
        <h1>{strings.ira.signup.heading}</h1>
        <Link to={'/ira/success'}>Submit</Link>
      </div>
    )
  }
}
