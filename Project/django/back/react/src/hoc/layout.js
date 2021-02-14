import React, {useState} from 'react'
import classes from './Layout.module.scss'
import Drawer from "../Navigation/Drawer/Drawer";
import MenuToggle from "../Navigation/MenuToggle/MenuToggle";
import Navbar from "../left-scroll/menu/Navbar/Navbar";
import Media from 'react-media';



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

            <Media query="(min-width: 770px)">{matches => {
                    return matches ?
                        <Navbar bgc={props.bgc}/>
                        :

                        <MenuToggle
                            onToggle={toggleMenuHandler}
                            isOpen={state.menu}
                        />

                }}</Media>
            <Drawer
                isOpen={state.menu}
                onClose={menuCloseHandler}
                isAuthenticated={props.isAuthenticated}
            />

            <main>{props.children}</main>

        </div>
    )
}
export default Layout