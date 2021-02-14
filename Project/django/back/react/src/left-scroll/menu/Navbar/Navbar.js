import React from 'react'
import classes from "./Navbar.module.scss";
import {Grid} from "@material-ui/core";
import {NavLink, Link} from "react-router-dom";


const Navbar = props => {


    return (
        <>

            <div className={classes.main} style={{backgroundColor: props.bgc}}>
                <div className='container-fluid'>
                    <Grid xs={12}>
                        <div className={classes.menu}>
                            <h6 className={classes.title}><Link to={'/'} className={classes.a}>
                                Домой
                            </Link>
                            </h6>
                            <ul className={classes.menuItem}>


                                <li className={classes.menuItems}><NavLink to='/about-us/services'
                                                                           activeClassName={classes.active}
                                                                           className={classes.a}> Услуги</NavLink>
                                </li>
                                <li className={classes.menuItems}><NavLink to='/about-us/portfolio'
                                                                           activeClassName={classes.active}
                                                                           className={classes.a}> Наши работы</NavLink>
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
                    </Grid>
                </div>
            </div>
        </>
    )
}
export default Navbar