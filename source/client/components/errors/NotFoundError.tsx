import * as React from "react"
import * as cx from "classnames"
import { Component } from "react"
import { ApplicationTemplate } from "../template/ApplicationTemplate"
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

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

        console.log(this.props.data)

        return (
            <ApplicationTemplate>
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