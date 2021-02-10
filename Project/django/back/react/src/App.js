import React, {useState, useEffect} from 'react'
import LeftScroll from "./left-scroll/LeftScroll";
import Main from "./main/main";
import RightScroll from "./right-scroll/RightScroll";
import {Switch, Route, Redirect, NavLink, useLocation} from 'react-router-dom'
import {useTransition, animated} from "react-spring";
import Layout from "./hoc/layout";

const App = props => {

    const location = useLocation()
    const transition = useTransition(location, location => location.pathname, {
        from: {
            transform: 'translateX(1000vw)', transition: '0.1s', opacity: 0,
        },
        enter: {
            transform: 'translateX(0)', transition: '0.3   s', opacity: 1,
        },
        leave: {
            transform: 'translateX(-1000vw)', transition: '.3s', opacity: 0,
        }
    })

    return (
        <Layout>

            {transition.map(({item, props, key}) => (
                <animated.div key={key} style={props}>

                    <Switch location={item}>
                        <Route exact path='/' component={Main}/>
                        <Route exact path='/portfolio' component={RightScroll}/>
                        <Route path='/about-us' component={LeftScroll}/>
                        <Route component={()=>(<h1 style={{color: 'red'}}>Нет такой страницы</h1>)}/>
                    </Switch>

                </animated.div>
            ))}
        </Layout>
    )
}
export default App