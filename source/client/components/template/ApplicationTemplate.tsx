import * as React from "react"
import * as cx from "classnames"
import { Component } from "react"
import { Navbar } from "./Navbar"
import { MenuDrawer } from "./MenuDrawer"

export class ApplicationTemplate extends Component<undefined, {
    toggleMenu: boolean    
}> {

    constructor() {
        super()

        this.state = {
            toggleMenu: false
        }

        this.closeMenu = this.closeMenu.bind(this)
        this.toggleMenu = this.toggleMenu.bind(this)
    }

    render() {

        return (
            <div className={cx(["application_template--frame"])} >
                <Navbar toggleMenu={this.toggleMenu}/>
                <div className={cx(["application_template--body_container"])}>
                    <MenuDrawer exposed={this.state.toggleMenu}/>
                    <div className={cx(["application_template--content_wrapper"], {
                        "application_template--content_wrapper__faded": this.state.toggleMenu
                    })} onClick={this.closeMenu}>
                        {this.props.children}
                    </div>
                </div>
            </div>
        )

    }

    closeMenu(e) {

        this.setState({
            toggleMenu: false
        })

    }

    toggleMenu() {
        
        this.setState({
            toggleMenu: !this.state.toggleMenu
        })

    }

}