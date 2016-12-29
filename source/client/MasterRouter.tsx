import * as React from "react"
import { Component } from "react"
import { Router, Route, IndexRoute, browserHistory } from "react-router"

// Import default error pages
import { NotFoundError } from "./components/errors/NotFoundError"

// Import Authentication and registration pages
import { AuthenticationFailed, AuthenticationSuccess } from "./components/authentication/AuthenticationController"
import { OnboardingController } from "./components/onboarding/OnboardingController"

export class Routes extends Component<undefined, undefined> {

    render() {
        
        return <Router history={browserHistory}>
            <Route key="home" path="/"></Route>
            <Route path="/app/auth/">
                <Route path="success" component={AuthenticationSuccess}/>
                <Route path="failure" component={AuthenticationFailed}/>
            </Route>
            <Route path="/app/onboarding" component={OnboardingController}>
            </Route>
            <Route path="*" component={NotFoundError}/>
        </Router>

    }

}