import React from 'react'
import classes from './Contacts.module.scss'
import Input from "./Input/Input";
import {NavLink, Route} from "react-router-dom";

const Contacts = props => {
    return (
        <div>
            <ul className={classes.menu}>
                <li className={classes.li}><NavLink to='/about-us/contacts/callback'>Обратная связь</NavLink></li>
                <li className={classes.li}><NavLink to='/about-us/contacts/social'>Соц. сети</NavLink></li>
                <li className={classes.li}><NavLink to='/about-us/contacts/email'>Email</NavLink></li>
                <li className={classes.li}><NavLink to='/about-us/contacts/contact'>Контакты</NavLink></li>
            </ul>
            <div className={classes.input}>

            </div>
        </div>
    )
}
export default Contacts