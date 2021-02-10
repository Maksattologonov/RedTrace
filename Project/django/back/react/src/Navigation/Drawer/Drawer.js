import React from 'react'
import classes from './Drawer.module.scss'
import {NavLink} from 'react-router-dom'
import Backdrop from "../../UI/Backdrop/Backdrop";


const Drawer = props => {

    const clickHandler = () => {
        props.onClose()
    }

    const renderLinks = (links) => {
        return links.map((link, index) => {
            return (
                <li key={index}>
                    <NavLink
                        to={link.to}
                        exact={link.exact}
                        activeClassName={classes.active}
                        onClick={clickHandler}
                    >
                        {link.label}
                    </NavLink>
                </li>
            )
        })
    }


        const cls = [classes.Drawer]

        if (!props.isOpen) {
            cls.push(classes.close)
        }

        const links = [
            {to: '/about-us/services', label: 'Услуги', exact: true},
            {to: '/about-us/portfolio', label: 'Наши работы', exact: true},
            {to: '/about-us/instruments', label: 'Инструменты', exact: true},
            {to: '/about-us/contacts', label: 'Контакты', exact: true},
            {to: '/', label: 'Домой', exact: true}
        ]

        return (
            <React.Fragment>
                <nav className={cls.join(' ')}>
                    <ul>
                        { renderLinks(links) }
                    </ul>
                </nav>
                { props.isOpen ? <Backdrop onClick={props.onClose} /> : null }
            </React.Fragment>
        )

}

export default Drawer