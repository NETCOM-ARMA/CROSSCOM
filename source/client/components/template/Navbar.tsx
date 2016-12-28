import * as React from "react"
import * as cx from "classnames"
import { Component } from "react"
import { graphql } from "react-apollo"
import gql from "graphql-tag"
import { Link } from "react-router"

export class NavbarRaw extends Component<{
    data: {
        loading: boolean,
        currentUser: {
            id: number
            steam_id: string
        }
    },
    toggleMenu
}, undefined> {

    render() {

        if ( this.props.data.loading ) {
            
            return <div>Loading...</div>

        } else {

            return (
                <div className={cx(["navbar--container"])} >
                    <a className={cx(["navbar--menu_item"])} onClick={this.props.toggleMenu}>
                        <i className="fa fa-bars" aria-hidden="true"></i>
                    </a>
                    <Link to="/app/" className={cx(["navbar--crosscom_logo__container"])}>
                        <img src="/statics/images/branding/transparent_logo.png" className={cx(["navbar--crosscom_logo"])}/>
                    </Link>
                    <Link to="/app/my-profile" className={cx(["navbar--menu_item"])}>
                        <i className="fa fa-user" aria-hidden="true"></i>
                    </Link>
                </div>
            )
            
        }

    }

}

const CurrentUserQuery = gql`
    query CurrentUserForNavbar {
        currentUser {
            id
            steam_id
        }
    }
`

export let Navbar = graphql(CurrentUserQuery)(NavbarRaw)