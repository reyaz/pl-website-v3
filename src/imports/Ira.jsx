import React, { Component } from 'react'
import { Switch, Route } from 'react-router'

import IraIndex from './IraIndex'
import IraLogin from './IraLogin'
import IraNav from './IraNav'
import IraSignup from './IraSignup'
import IraSuccess from './IraSuccess'

export default class Ira extends Component {
  componentWillReceiveProps () {
    const state = {}

    state.canGoBack = true

    this.setState(state)
  }

  constructor (props) {
    super(props)

    this.state = {}
    this.state.canGoBack = false
  }

  render () {
    return (
      <div>
        <IraNav canGoBack={this.state.canGoBack} />
        <Switch>
          <Route exact path={'/ira'} component={IraIndex} />
          <Route path={'/ira/login'} component={IraLogin} />
          <Route path={'/ira/signup'} component={IraSignup} />
          <Route path={'/ira/success'} component={IraSuccess} />
        </Switch>
      </div>
    )
  }
}
