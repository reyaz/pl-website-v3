import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class IraNav extends Component {
  render () {
    return (
      <nav>
        <Link to={'/ira'}>Back</Link>
        <hr />
      </nav>
    )
  }
}
