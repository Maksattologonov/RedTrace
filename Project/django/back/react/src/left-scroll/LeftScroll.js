import React from 'react'
import classes from './Leftscroll.module.scss'
import {Route, Switch, useLocation} from "react-router-dom";
import Service from "./menu/Services/Services";
import Portfolio from "./menu/Portfolio/Portfolio";
import Instruments from "./menu/Instruments/Instruments";
import Contacts from "./menu/Contacts/Contacts";
import {animated, useTransition} from "react-spring";
import {Grid} from "@material-ui/core"

const LeftScroll = () => {


    const location = useLocation()
    const transition = useTransition(location, location => location.pathname, {
        from: {
            transform: 'translateY(100vh)', transition: '0.3s', opacity: 0,
        },
        enter: {
            transform: 'translateY(0)', transition: '0.5s', opacity: 1,
        },
        leave: {
            transform: 'translateY(-100vh)', transition: '.2s', opacity: 0,
        }
    })

    return (
        <>
            {transition.map(({item, props, key}) => (
                <animated.div key={key} style={props}>
                    <Grid xs={12} >
                        <Switch location={item}>
                            <Route path='/about-us/services' component={Service}/>
                            <Route path='/about-us/portfolio' component={Portfolio}/>
                            <Route path='/about-us/instruments'
                                   component={Instruments}/>
                            <Route path='/about-us/contacts' component={Contacts}/>
                        </Switch>
                    </Grid>
                </animated.div>
            ))}</>
    )
}


export default LeftScroll