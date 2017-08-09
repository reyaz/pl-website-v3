import React from 'react'
import { Switch, Route } from 'react-router'

import IraIndex from './IraIndex'
import IraLogin from './IraLogin'
import IraSignup from './IraSignup'
import IraSuccess from './IraSuccess'
import IraNav from './IraNav'

const Ira = () => (
  <Switch>
    <div>
      <Route strict path={'/ira/(login|signup)'} component={IraNav} />
      <Route exact path={'/ira'} component={IraIndex} />
      <Route path={'/ira/login'} component={IraLogin} />
      <Route path={'/ira/signup'} component={IraSignup} />
      <Route path={'/ira/success'} component={IraSuccess} />
    </div>
  </Switch>
)

export default Ira
