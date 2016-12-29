import * as React from "react"
import { Component } from "react"
import { ApplicationTemplate } from "../template/ApplicationTemplate"
import { RedirectIfNotAuthenticated } from "../authentication/RedirectIfNotAuthenticated"
import { OnboardingPlayerTypeForm } from "./OnboardingPlayerTypeForm"

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
        
    }

    render() {
        let form = null

        if ( this.state.step === "player_type" ) {
            form = (
                <OnboardingPlayerTypeForm updateFormState={this.setState}/>
            )
        }
    
        return <ApplicationTemplate>
            <RedirectIfNotAuthenticated is_setup_page={true} />
            {form}
        </ApplicationTemplate>

    }

}