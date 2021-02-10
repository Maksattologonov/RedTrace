import React, {useState} from 'react'
import classes from './Layout.module.scss'
import Drawer from "../Navigation/Drawer/Drawer";
import MenuToggle from "../Navigation/MenuToggle/MenuToggle";


const Layout = props => {


    const [state, setState] = useState({
        menu: false
    })

    function toggleMenuHandler() {
        setState({
            menu: !state.menu
        })
    }

    function menuCloseHandler() {
        setState({
            menu: false
        })
    }

    return (
        <div className={classes.Layout}>
            <Drawer
                isOpen={state.menu}
                onClose={menuCloseHandler}
                isAuthenticated={props.isAuthenticated}
            />

            <MenuToggle
                onToggle={toggleMenuHandler}
                isOpen={state.menu}
            />

            <main>{props.children}</main>
        </div>
    )
}
export default Layout