import * as React from "react"
import * as cx from "classnames"
import { Component } from "react"
import { Link } from "react-router"
import { Motion, spring } from "react-motion"
import { graphql } from "react-apollo"
import gql from "graphql-tag"

export class MenuDrawerRaw extends Component<{
    exposed: boolean,
    data: {
        loading: boolean,
        localization: {
            menu_drawer_links: {
                authenticated_as_prepend: string
                dashboard_link: string
                units_link: string
                operations_link: string
                signout_button_link: string
            }
        },
        currentUser: {
            username: string,
            realism_name: {
                first: string,
                last: string
            }
        }
    }
}, undefined> {

    render() {

        if (this.props.data.loading) {
            return <div>Loading...</div>
        }

        return (
            <Motion style={{left: spring(this.props.exposed ? 0 : 300)}}>
                {({left}) => 
                    <div className={cx(["menu_drawer"])} style={{
                        WebkitTransform: `translate3d(-${left}px, 0, 0)`,
                        transform: `translate3d(-${left}px, 0, 0)`
                    }}>

                        <span className={cx(["menu_drawer--current_user_header"])}>{this.props.data.localization.menu_drawer_links.authenticated_as_prepend}</span>
                        <span className={cx(["menu_drawer--current_user_name"])}>{
                            this.props.data.currentUser.realism_name ? 
                                `${this.props.data.currentUser.realism_name.last}.${this.props.data.currentUser.realism_name.first.charAt(0)}` 
                                : "this.props.data.currentUser.username"
                        }</span>
                        <ul className={cx(["menu_drawer--primary"])}>
                            <Link to="/app/" className={cx(["menu_drawer--primary__link"])}>{this.props.data.localization.menu_drawer_links.dashboard_link}</Link>
                            <Link to="/app/units" className={cx(["menu_drawer--primary__link"])}>{this.props.data.localization.menu_drawer_links.units_link}</Link>
                            <Link to="/app/operations" className={cx(["menu_drawer--primary__link"])}>{this.props.data.localization.menu_drawer_links.operations_link}</Link>
                        </ul>
                        <Link to="/app/authentication/logout" className={cx(["menu_drawer--logout_button"])}>
                            {this.props.data.localization.menu_drawer_links.signout_button_link}
                        </Link>
                    </div>
                }
            </Motion>
        )

    }

}

const MenuLocalizations = gql`
    query MenuLocalizations($locale: String!) {
        localization(locale: $locale) {
            menu_drawer_links {
                authenticated_as_prepend
                dashboard_link
                units_link
                operations_link
                signout_button_link
            }
        }
        currentUser {
            username
            realism_name {
                first
                last
            }
        }
    }
`

export let MenuDrawer = graphql(MenuLocalizations, {
    options: () => ({
        variables: {
            locale: "en"
        }
    }),
})(MenuDrawerRaw)