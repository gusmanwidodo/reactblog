import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

// components
import Header from '../includes/Header'
import Home from '../pages/Home'
import About from '../pages/About'

class Full extends Component {
    render() {
        return (
            <div className="full-layout">
                <Header />

                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/about" component={About}/>
                </Switch>
            </div>
        );
    }
}

export default Full;