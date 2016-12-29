import * as React from "react"
import * as cx from "classnames"
import { Component } from "react"
import { ApplicationTemplate } from "../template/ApplicationTemplate"
import { graphql } from "react-apollo"
import gql from "graphql-tag"
import { RedirectIfNotAuthenticated } from "../authentication/RedirectIfNotAuthenticated"

export class NotFoundErrorRaw extends Component<{
    data: {
        loading: boolean,
        localization: {
            errors_and_system_messages: {
                content_not_found_error_title: string,
                content_not_found_error_body: string,
            }
        }
    }    
}, undefined> {

    render() {

        if ( this.props.data.loading ) {
            return <div>Loading...</div>
        }

        return (
            <ApplicationTemplate>
                <RedirectIfNotAuthenticated is_setup_page={false} />
                <div className={cx(["full_screen_centered_container"])}>
                    <div className={cx(["panel", "information-panel"])}>
                        <div className={cx(["panel_header"])}>
                            {this.props.data.localization.errors_and_system_messages.content_not_found_error_title}
                        </div>
                        <div className={cx(["panel_body", "preformatted"])}>
                            {this.props.data.localization.errors_and_system_messages.content_not_found_error_body}
                        </div>
                    </div>
                </div>
            </ApplicationTemplate>
        )

    }

}

const LocalizationQuery = gql`
    query NotFoundLocalization($locale: String!) {
        localization(locale: $locale) {
            errors_and_system_messages {
                content_not_found_error_title
                content_not_found_error_body
            }
        }
    }
`

export let NotFoundError = graphql(LocalizationQuery, {
    options: () => ({
        variables: {
            locale: "en"
        }
    }),
})(NotFoundErrorRaw)