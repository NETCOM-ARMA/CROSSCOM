import * as React from "react"
import { Component } from "react"
import * as lscache from "lscache"
import { parse } from "query-string"

export class AuthenticationSuccess extends Component<undefined, undefined> {

    render() {
        
        let url_parameters: any = parse(location.search)

        lscache.set("crosscom_token", url_parameters.token, 7200)
        
        // Redirect to the homepage to reinit the GraphQL Cache
        location.assign("/app")

        return <div>You are being redirected...</div>

    }

}

export class AuthenticationFailed extends Component<undefined, undefined> {

    render() {
        
        // TODO - Implement a full page
        return <div>Authentication Failure</div>

    }

}