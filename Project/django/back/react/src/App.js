import React from 'react'
import LeftScroll from "./left-scroll/LeftScroll";
import {Switch, Route, useLocation} from 'react-router-dom'
import {useTransition, animated} from "react-spring";
import Layout from "./hoc/layout";
import Main from "./main/main";
import Input from "./left-scroll/menu/Contacts/Input/Inputs";



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

    const opacity = useLocation()
    const visibility = useTransition(opacity, location => location.pathname, {
        from: {
            transition: '0.5s', opacity: 0,display: 'none', transform: 'translateZ(45deg)'
        },
        enter: {
            transition: '2s',display: 'block', opacity: 1,transform: 'translateZ(0)'
        },
        leave: {
            transition: '0.3s', opacity: 0,display: 'none',transform: 'translateZ(-45deg)'
        }
    })

    return (
        <Layout>
            {transition.map(({item, props, key}) => (
                <animated.div key={key} style={props}>
                    <Switch location={item}>
                        <Route path='/about-us' component={LeftScroll}/>

                    </Switch>
                </animated.div>
            ))}
            {visibility.map(({item, props, key}) => (
                <animated.div key={key} style={props}>
                <Route path='/about-us/callback' exact component={Input}/>
                </animated.div> ))}
                <Route path='/' component={Main} exact/>

        </Layout>
    )
}
export default App