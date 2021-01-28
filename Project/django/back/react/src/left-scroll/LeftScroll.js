import React, {Component} from 'react'
import classes from './Leftscroll.module.scss'
import {NavLink, Route} from "react-router-dom";
import Service from "./menu/Services/Services";
import Portfolio from "./menu/Portfolio/Portfolio";
import img from './menu/Portfolio/licey.png'
import img2 from './menu/Portfolio/wesley-tingey-eMNevd6ErCU-unsplash.jpg'
import img3 from './menu/Portfolio/background.png'

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
                            <h1 className={classes.title}><NavLink to={'about-us'}> О НАС </NavLink></h1>
                            <ul className={classes.menuItem}>
                                <li className={classes.menuItems}><NavLink to='/services'
                                                                           activeClassName={classes.active}> Услуги</NavLink>
                                </li>
                                <li className={classes.menuItems}><NavLink to='/portfolio'
                                                                           activeClassName={classes.active}> Наши
                                    работы</NavLink>
                                </li>
                                <li className={classes.menuItems}><NavLink to='/instruments'
                                                                           activeClassName={classes.active}> Инструменты</NavLink>
                                </li>
                                <li className={classes.menuItems}><NavLink to='/contacts'
                                                                           activeClassName={classes.active}> Контакты</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <Route path='/services' exact component={Service}/>
                <Route path='/portfolio' exact component={() => <div className={classes.card}><Portfolio
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
            </>
        )
    }
}

export default LeftScroll