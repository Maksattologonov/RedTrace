import React, {useEffect} from 'react'
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
import img from "./left-scroll/menu/Portfolio/licey.png";
import img2 from "./left-scroll/menu/Portfolio/wesley-tingey-eMNevd6ErCU-unsplash.jpg";
import img3 from "./left-scroll/menu/Portfolio/background.png";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import {useTransition, animated} from "react-spring";

const App = props => {

    const location = useLocation()
    const transition = useTransition(location, location => location.pathname, {
        from: {
             transform: 'translateY(-300vw)', transition: '0.3s',
        },
        enter: {
             transform: 'translateY(0)', transition: '0.3s',
        },
        leave: {
             transform: 'translateY(1000px)',  transition: '.3s',
        }
    })
    const visible = {
        licey: [
            {link: 'm78595.hostru09.fornex.host'},
            {img: img},
            {text: 'Licey.kg'}
        ],
        Chicomoda: [
            {link: 'm78595.hostru09.fornex.host'},
            {img: img2},
            {text: 'Chicomoda.site'}
        ],
        Megasport: [
            {link: 'm78595.hostru09.fornex.host'},
            {img: img3},
            {text: 'Megasport.kg'}
        ]
    }
    return (
        <>
            <div className={classes.main}>
                <div className='container-fluid'>
                    <div className={classes.menu}>
                        <h6 className={classes.title}><NavLink to={'/'} className={classes.a}> Домой </NavLink></h6>
                        <ul className={classes.menuItem}>
                            <li className={classes.menuItems}><NavLink to='/about-us/services'
                                                                       activeClassName={classes.active}
                                                                       className={classes.a}> Услуги</NavLink>
                            </li>
                            <li className={classes.menuItems}><NavLink to='/about-us/portfolio'
                                                                       activeClassName={classes.active}
                                                                       className={classes.a}> Наши
                                работы</NavLink>
                            </li>
                            <li className={classes.menuItems}><NavLink to='/about-us/instruments'
                                                                       activeClassName={classes.active}
                                                                       className={classes.a}> Инструменты</NavLink>
                            </li>
                            <li className={classes.menuItems}><NavLink to='/about-us/contacts'
                                                                       activeClassName={classes.active}
                                                                       className={classes.a + ' ' + classes.contact}> Контакты</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <NavLink to='/about-us' className={classes.link}>
                <NavigateBeforeIcon style={{fontSize: '100pt', cursor: 'pointer'}} className={classes.beforeIcon}/>
            </NavLink>
            {transition.map(({item, props, key}) => (
                <animated.div key={key} style={props}>
                    <Switch location={item}>
                        <Route exact path='/' component={Main}/>
                        <Route exact path='/portfolio' component={RightScroll}/>
                        <Route exact path='/about-us' component={LeftScroll}/>
                        <Route path='/about-us/services'  component={Service}/>
                        <Route path='/about-us/portfolio'
                               component={() => <div className={classes.card}><Portfolio
                                   img={visible.licey[1].img}
                                   link={visible.licey[0].link}
                                   text={visible.licey[2].text}
                               />
                                   <Portfolio
                                       img={visible.Chicomoda[1].img}
                                       link={visible.Chicomoda[0].link}
                                       text={visible.Chicomoda[2].text}
                                   />
                                   <Portfolio
                                       img={visible.Megasport[1].img}
                                       link={visible.Megasport[0].link}
                                       text={visible.Megasport[2].text}
                                   /></div>}
                        />
                        <Route path='/about-us/instruments'
                               component={() => <div className={classes.card}><Instruments/>
                                   <Instruments/>
                                   <Instruments/>
                                   <Instruments/>
                               </div>}/>
                        <Route path='/about-us/contacts'  component={Contacts}/>
                        <Route path='/about-us/contacts/callback'  component={() => <Input/>}/>

                    </Switch>
                </animated.div>
            ))}
            <NavLink to='/portfolio' className={classes.link}>
                <NavigateNextIcon style={{fontSize: '100pt', cursor: 'pointer'}} className={classes.afterIcon}/>
            </NavLink>
        </>
    )
}
export default App