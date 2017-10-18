import React, { Component } from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// layout
import Full from './layouts/Full'

// style
import 'bootstrap/dist/css/bootstrap.css'

export default class App extends Component {

  render() {
    return (
      <Router>  
        <Switch>
          <Route path="/" name="Full" component={Full}/>
        </Switch>
      </Router>
    )
  }
}

render(<App />, document.getElementById('app'))
