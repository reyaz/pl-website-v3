import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'

function shouldRender (pathname) {
  if (pathname === '/ira') {
    return false
  }

  return true
}

const BackElement = (props) => {
  const { canGoBack, history } = props

  if (canGoBack) {
    return (<button onClick={history.goBack}>Back</button>)
  }

  return (<Link to={'/ira'}>What is Pulselocker?</Link>)
}

class IraNav extends Component {
  componentWillReceiveProps () {
    this.setState((prevState, props) => {
      return {
        canGoBack: props.canGoBack,
        shouldRender: shouldRender(props.location.pathname)
      }
    })
  }

  constructor (props) {
    super(props)

    this.state = {}

    this.state.shouldRender = shouldRender(props.location.pathname)
    this.state.canGoBack = props.canGoBack
  }

  render () {
    const { history } = this.props
    const canGoBack = this.state.canGoBack

    if (this.state.shouldRender) {
      return (
        <nav>
          <BackElement canGoBack={canGoBack} history={history} />
          <hr />
        </nav>
      )
    }

    return null
  }
}

export default withRouter(IraNav)
