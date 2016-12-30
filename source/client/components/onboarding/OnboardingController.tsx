import * as React from "react"
import { Component } from "react"
import { ApplicationTemplate } from "../template/ApplicationTemplate"
import { RedirectIfNotAuthenticated } from "../authentication/RedirectIfNotAuthenticated"
import { OnboardingPlayerTypeForm } from "./OnboardingPlayerTypeForm"
import { OnboardingBiographicalForm } from "./OnboardingBiographicalForm"

export class OnboardingController extends Component<undefined, {
    member_type: string,
    step: string
}> {
    
    constructor() {

        super()

        this.state = {
            member_type: "",
            step: "player_type"
        }

        this.updateFormState = this.updateFormState.bind(this)
        
    }

    render() {
        let form = null

        if ( this.state.step === "player_type" ) {
            form = (
                <OnboardingPlayerTypeForm updateFormState={this.updateFormState} />
            )
        }
    
        if ( this.state.step === "biographical" ) {
            form = (
                <OnboardingBiographicalForm updateFormState={this.updateFormState} />
            )
        }

        return <ApplicationTemplate>
            <RedirectIfNotAuthenticated is_setup_page={true} />
            {form}
        </ApplicationTemplate>

    }

    updateFormState(state) {

        this.setState(state)

    }

}