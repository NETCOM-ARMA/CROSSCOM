import * as React from "react"
import { Component } from "react"
import * as cx from "classnames"

export class OnboardingPlayerTypeForm extends Component<{
    updateFormState: Function
}, undefined> {

    render() {

        return <div className={cx(["onboarding-form"])}>
            <h1 className={cx(["onboarding-form--header"])}>Welcome to CROSSCOM</h1>
            <p className={cx(["onboarding-form--intro"])}>To get started please select which of the following best describes you as a player:</p>
            <div className={cx(["onboarding-form--body"])}>
                <div className={cx(["onboarding-form--double_panel"])}>
                    <div className={cx(["panel"])}>
                        <div className={cx(["panel_header"])}>
                            Tactical Realism
                        </div>
                        <div className={cx(["panel_body", "preformatted"])}>
                            <p>
                                Tactical Realism represents the pursuit of tactical emulation without the additional aspect of military roleplay.
                            </p>
                            <p>
                                Famous tactical realism groups include Shacktac and United Operations.
                            </p>
                            <ul className={cx(["fa-ul"])}>
                                <li><i className={cx(["fa-li", "fa", "fa-check"])}></i>Players are identified by gamertags or unrealistic names</li>
                                <li><i className={cx(["fa-li", "fa", "fa-check"])}></i>Lack of a meaningful and respected rank structure</li>
                                <li><i className={cx(["fa-li", "fa", "fa-check"])}></i>Strong focus on battlefield tactics</li>
                                <li><i className={cx(["fa-li", "fa", "fa-check"])}></i>Flexible attendance</li>
                            </ul>
                            <a href="#" className={cx(["onboarding-form--select-button"])} onClick={this.selectPlayerType("tacsim")}>
                                Select
                            </a>
                        </div>
                    </div>
                    <div className={cx(["panel"])}>
                        <div className={cx(["panel_header"])}>
                            Military Simulation
                        </div>
                        <div className={cx(["panel_body", "preformatted"])}>
                            <p>
                                Military Simulation (MILSIM) represents a role playing environment that applies both in and outside of the game.
                            </p>
                            <p>
                                Prominent MILSIM groups include the 15th MEU and the 506th Infantry Regiment.
                            </p>
                            <ul className={cx(["fa-ul"])}>
                                <li><i className={cx(["fa-li", "fa", "fa-check"])}></i>Players are identified by realistic names</li>
                                <li><i className={cx(["fa-li", "fa", "fa-check"])}></i>Strong rank structure that is respected</li>
                                <li><i className={cx(["fa-li", "fa", "fa-check"])}></i>Focus on authentic recreation of training and combat</li>
                                <li><i className={cx(["fa-li", "fa", "fa-check"])}></i>Attendance requirements</li>
                            </ul>
                            <a href="#" className={cx(["onboarding-form--select-button"])} onClick={this.selectPlayerType("milsim")}>
                                Select
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    }

    selectPlayerType(type) {

        return () => {

            this.props.updateFormState({
                member_type: type,
                step: "biographical"
            })

        }

    }

}