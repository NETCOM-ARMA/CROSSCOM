import * as React from "react"
import { Component } from "react"
import { Router, Route, browserHistory } from "react-router"

// Import default error pages
import { NotFoundError } from "./components/errors/NotFoundError"

// Import Authentication and registration pages


export class Routes extends Component<undefined, undefined> {

    render() {
        
        return <Router history={browserHistory}>
            <Route path="/"></Route>
            <Route path="*" component={NotFoundError}/>
        </Router>

    }

}