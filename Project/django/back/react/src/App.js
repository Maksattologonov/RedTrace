import React, {useState, useEffect} from 'react'
import LeftScroll from "./left-scroll/LeftScroll";
import Main from "./main/main";
import RightScroll from "./right-scroll/RightScroll";
import {Switch, Route, Redirect, NavLink, useLocation} from 'react-router-dom'
import Service from "./left-scroll/menu/Services/Services";
import classes from "./left-scroll/Leftscroll.module.scss";
import Portfolio from "./left-scroll/menu/Portfolio/Portfolio";
import Instruments from "./left-scroll/menu/Instruments/Instruments";
import Contacts from "./left-scroll/menu/Contacts/Contacts";
import Input from "./left-scroll/menu/Contacts/Input/Inputs";
import {useTransition, animated} from "react-spring";
import Loyaut from "./hoc/layout";

const App = props => {

    const location = useLocation()
    const transition = useTransition(location, location => location.pathname, {
        from: {
            transform: 'translateY(1000vh)', transition: '0.1s', opacity: 0,
        },
        enter: {
            transform: 'translateY(0)', transition: '0.3   s', opacity: 1,
        },
        leave: {
            transform: 'translateY(-1000vh)', transition: '.5s', opacity: 0,
        }
    })

    return (
        <>
            {/*<NavLink to='/about-us' className={classes.link} style={{zIndex: 100*/}
            {/*}}>*/}
            {/*    <NavigateBeforeIcon style={{fontSize: '100pt', cursor: 'pointer'}} className={classes.beforeIcon}/>*/}
            {/*</NavLink>*/}
            {/*<NavLink to='/portfolio' className={classes.link} style={{zIndex: 100*/}
            {/*}}>*/}
            {/*    <NavigateNextIcon style={{fontSize: '100pt', cursor: 'pointer'}} className={classes.afterIcon}/>*/}
            {/*</NavLink>*/}


            {transition.map(({item, props, key}) => (
                <animated.div key={key} style={props}>
                    <Switch location={item}>
                        <Route exact path='/' component={Main}/>
                        <Route exact path='/portfolio' component={RightScroll}/>
                        <Route path='/about-us' component={LeftScroll}/>
                    </Switch>
                </animated.div>
            ))}

        </>)
}
export default App