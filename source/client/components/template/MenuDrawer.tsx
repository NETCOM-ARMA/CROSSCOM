import * as React from "react"
import * as cx from "classnames"
import { Component } from "react"
import { Link } from "react-router"
import { Motion, spring } from "react-motion"

export class MenuDrawer extends Component<{
    exposed: boolean    
}, undefined> {

    render() {

        return (
            <Motion style={{left: spring(this.props.exposed ? 0 : 300)}}>
                {({left}) => 
                    <div className={cx(["menu_drawer"])} style={{
                        WebkitTransform: `translate3d(-${left}px, 0, 0)`,
                        transform: `translate3d(-${left}px, 0, 0)`
                    }}>
                        <ul className={cx(["menu_drawer--primary"])}>
                            <Link to="/app/" className={cx(["menu_drawer--primary__link"])}>Dashboard</Link>
                            <Link to="/app/my-units" className={cx(["menu_drawer--primary__link"])}>My Units</Link>
                        </ul>
                    </div>
                }
            </Motion>
        )

    }

}
