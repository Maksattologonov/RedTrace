import React from 'react'
import classes from './main.module.scss'
import {NavLink} from "react-router-dom";


const Main = props => {
    return (
        <div className={classes.wrap}>
        <div className={classes.main}>
            <div className={classes.bg}/>
            <div className={classes.text}>
                <NavLink to='/about-us'>
                Awesome
                </NavLink>
            </div>
        </div>
        </div>
    )
}
export default Main