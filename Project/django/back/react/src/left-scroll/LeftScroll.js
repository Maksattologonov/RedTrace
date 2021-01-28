import React, {Component} from 'react'
import classes from './Leftscroll.module.scss'
import {NavLink, Route} from "react-router-dom";
import Service from "./menu/Services/Services";
import Portfolio from "./menu/Portfolio/Portfolio";
import img from './menu/Portfolio/licey.png'
import img2 from './menu/Portfolio/wesley-tingey-eMNevd6ErCU-unsplash.jpg'
import img3 from './menu/Portfolio/background.png'
import Instruments from "./menu/Instruments/Instruments";
import Contacts from "./menu/Contacts/Contacts";
import Input from "./menu/Contacts/Input/Input";

class LeftScroll extends Component {
    state = {
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

    render() {
        return (
            <>
                <div className={classes.main}>
                    <div className='container'>
                        <div className={classes.menu}>
                            <h1 className={classes.title}><NavLink to={'about-us'} className={classes.a}> О НАС </NavLink></h1>
                            <ul className={classes.menuItem}>
                                <li className={classes.menuItems}><NavLink to='/about-us/services'
                                                                           activeClassName={classes.active} className={classes.a}> Услуги</NavLink>
                                </li>
                                <li className={classes.menuItems}><NavLink to='/about-us/portfolio'
                                                                           activeClassName={classes.active} className={classes.a}> Наши
                                    работы</NavLink>
                                </li>
                                <li className={classes.menuItems}><NavLink to='/about-us/instruments'
                                                                           activeClassName={classes.active} className={classes.a}> Инструменты</NavLink>
                                </li>
                                <li className={classes.menuItems}><NavLink to='/about-us/contacts'
                                                                           activeClassName={classes.active} className={classes.a}> Контакты</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <Route path='/about-us/services' exact component={Service}/>
                <Route path='/about-us/portfolio' exact component={() => <div className={classes.card}><Portfolio
                    img={this.state.licey[1].img}
                    link={this.state.licey[0].link}
                    text={this.state.licey[2].text}
                />
                    <Portfolio
                        img={this.state.Chicomoda[1].img}
                        link={this.state.Chicomoda[0].link}
                        text={this.state.Chicomoda[2].text}
                    />
                    <Portfolio
                        img={this.state.Megasport[1].img}
                        link={this.state.Megasport[0].link}
                        text={this.state.Megasport[2].text}
                    /></div>}
                />
                <Route path='/about-us/instruments' exact component={()=> <div className={classes.card}><Instruments/>
                    <Instruments/>
                    <Instruments/>
                    <Instruments/>
                </div>} />
                <Route path='/about-us/contacts' exact component={Contacts}/>
                <Route path='/about-us/contacts/callback' exact component={()=><Input/>}/>
            </>
        )
    }
}
export default LeftScroll