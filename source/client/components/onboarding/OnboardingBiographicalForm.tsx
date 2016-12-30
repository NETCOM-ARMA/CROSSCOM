import * as React from "react"
import { Component } from "react"
import * as cx from "classnames"
import * as Select from "react-select"

export class OnboardingBiographicalForm extends Component<{
    updateFormState: Function
}, {
    country: string
}> {

    constructor() {

        super()

        this.state = {
            country: null
        }
        
        this.countryChanged = this.countryChanged.bind(this)

    }

    render() {
        
        return <div className={cx(["onboarding-form"])}>
            <h1 className={cx(["onboarding-form--header"])}>Setup your Profile</h1>
            <p className={cx(["onboarding-form--intro"])}>This profile is your publically visible representation on the network.</p>
            <div className={cx(["onboarding-form--body"])}>
                <div className={cx(["onboarding-form--single_panel"])}>
                    <div className={cx(["panel"])}>
                        <a href="#" className={cx(["panel_header"])}>
                            Biographical Information
                        </a>
                        <div className={cx(["panel_body", "preformatted"])} style={{height: 400}}>
                            <p>This section is permanent and cannot be changed.</p>
                            <p>Your Age ( never D.O.B ) will be shown on your profile alongside your country of residence.</p>
                            <form>
                                <label className="onboarding-form--label" htmlFor="dob_day">Date of Birth</label>
                                <div className="onboarding-form--dob_selector">
                                    <input id="dob_day" type="text" placeholder="DD"/>
                                    <input id="dob_month" type="text" placeholder="MM"/>
                                    <input id="dob_year" type="text" placeholder="YYYY"/>
                                </div>
                                <label className="onboarding-form--label" htmlFor="country_of_residence">Country of Residence</label>
                                <Select name="country_of_residence"
                                    options={[
                                        { value: "GBR", label: "United Kingdom" },
                                        { value: "USA", label: "United States of America"}
                                    ]}
                                    value={this.state.country}
                                    onChange={this.countryChanged}/>
                            </form>
                            <a href="#" className={cx(["onboarding-form--select-button"])}>
                                Submit
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    }

    countryChanged(value) {
        this.setState({
            country: value
        })
    }

}