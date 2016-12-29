import * as React from "react"
import { Component } from "react"
import * as lscache from "lscache"
import { graphql } from "react-apollo"
import gql from "graphql-tag"
import { browserHistory } from "react-router"

export class RedirectIfNotAuthenticatedRaw extends Component<{
    data: {
        loading: boolean,
        currentUser: {
            steam_id: string,
            is_onboarded: boolean
        }
    },
    is_setup_page: boolean
}, undefined> {

    render() {
        
        if ( this.props.data.loading ) {
            return null
        } else {

            if ( this.props.data.currentUser === null ) {

                window.location.assign("/auth/steam/request")

            } else if ( this.props.data.currentUser.is_onboarded === false && !this.props.is_setup_page ) {
                
                browserHistory.push("/app/onboarding")

            }

            return null

        }

    }

}

const CurrentUserQuery = gql`
    query CurrentUserQuery {
        currentUser {
            steam_id
            is_onboarded
        }
    }
`

export let RedirectIfNotAuthenticated = graphql(CurrentUserQuery)(RedirectIfNotAuthenticatedRaw)