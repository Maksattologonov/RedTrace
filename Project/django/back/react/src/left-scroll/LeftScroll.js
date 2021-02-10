import React, {Component} from 'react'
import classes from './Leftscroll.module.scss'
import {NavLink, Route, Switch, useLocation} from "react-router-dom";
import Service from "./menu/Services/Services";
import Portfolio from "./menu/Portfolio/Portfolio";
import Instruments from "./menu/Instruments/Instruments";
import Contacts from "./menu/Contacts/Contacts";
import Input from "./menu/Contacts/Input/Inputs";
import {animated, useTransition} from "react-spring";
import {Grid} from "@material-ui/core";

const LeftScroll = () => {


    const location = useLocation()
    const transition = useTransition(location, location => location.pathname, {
        from: {
            transform: 'translateY(1000vh)', transition: '0.1s', opacity: 0,
        },
        enter: {
            transform: 'translateY(0)', transition: '0.3   s', opacity: 1,
        },
        leave: {
            transform: 'translateY(-1000vh)', transition: '.3s', opacity: 0,
        }
    })

    return (
        <>
            {transition.map(({item, props, key}) => (
                <animated.div key={key} style={props}>
                    <Grid xs={12}>
                            {/*<div className={classes.main}>*/}
                            {/*    <div className='container-fluid'>*/}
                            {/*        <Grid>*/}
                            {/*        <div className={classes.menu}>*/}
                            {/*            <h6 className={classes.title}><NavLink to={'/'}*/}
                            {/*                                                   className={classes.a}> Домой </NavLink>*/}
                            {/*            </h6>*/}
                            {/*            <ul className={classes.menuItem}>*/}
                            {/*                <li className={classes.menuItems}><NavLink to='/about-us/services'*/}
                            {/*                                                           activeClassName={classes.active}*/}
                            {/*                                                           className={classes.a}> Услуги</NavLink>*/}
                            {/*                </li>*/}
                            {/*                <li className={classes.menuItems}><NavLink to='/about-us/portfolio'*/}
                            {/*                                                           activeClassName={classes.active}*/}
                            {/*                                                           className={classes.a}> Наши*/}
                            {/*                    работы</NavLink>*/}
                            {/*                </li>*/}
                            {/*                <li className={classes.menuItems}><NavLink to='/about-us/instruments'*/}
                            {/*                                                           activeClassName={classes.active}*/}
                            {/*                                                           className={classes.a}> Инструменты</NavLink>*/}
                            {/*                </li>*/}
                            {/*                <li className={classes.menuItems}><NavLink to='/about-us/contacts'*/}
                            {/*                                                           activeClassName={classes.active}*/}
                            {/*                                                           className={classes.a + ' ' + classes.contact}> Контакты</NavLink>*/}
                            {/*                </li>*/}
                            {/*            </ul>*/}
                            {/*        </div>*/}
                            {/*        </Grid>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                            <Switch location={item}>
                                <Route path='/about-us/services' component={Service}/>
                                <Route path='/about-us/portfolio' component={Portfolio}/>
                                <Route path='/about-us/instruments'
                                       component={Instruments}/>
                                <Route path='/about-us/contacts' component={Contacts}/>
                                <Route path='/about-us/callback' component={Input}/>
                                <Route component={()=>(<h1 style={{color: 'red'}}>Нет такой страницы</h1>)}/>
                            </Switch>
                    </Grid>
                </animated.div>
            ))}</>
    )
}


export default LeftScroll