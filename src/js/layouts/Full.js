import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

// components
import Header from '../includes/Header'
import Home from '../pages/Home'
import About from '../pages/About'
import Detail from '../pages/Detail'

class Full extends Component {
    render() {
        return (
            <div className="full-layout">
                <Header />

                <div className="container p-3">
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/about" component={About}/>
                        <Route path="/detail" component={Detail}/>
                    </Switch>
                </div>
            </div>
        );
    }
}

export default Full;