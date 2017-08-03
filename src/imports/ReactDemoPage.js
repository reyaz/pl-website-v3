import React, { Component } from 'react'

import ReactDemoTimer from './ReactDemoTimer'
import strings from './strings'

export default class ReactDemoPage extends Component {
  render () {
    const { message } = this.props

    return (
      <div>
        <ReactDemoTimer />
        <h1>{strings.main.greating}</h1>
        <p>{message}</p>
      </div>
    )
  }
}
