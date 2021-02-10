import React, {useEffect} from 'react'
import classes from './Contacts.module.scss'
import {useState} from "react";
import Button from "../../../UI/Button/Button";
import axios from "axios";
import {NavLink} from "react-router-dom";
import Grid from "@material-ui/core/Grid";


const Contacts = () => {

    const [projects, setProjects] = useState([])
    useEffect(() => {
        axios({
            method: "GET",
            url: 'http://127.0.0.1:8000/api/contact'
        }).then(response => {
            setProjects(response.data)
        })
    }, [])

    return (
        <>
            <Grid>
            <div className={classes.wrap}>

                <div className={classes.main}>
                    <h5 className={classes.block}>Контакты</h5>
                    {projects.map(p => (
                        <div>
                            <h3 className={classes.block}>Имя</h3>
                            <div className={classes.number}>{p.name}</div>
                            <h3 className={classes.block}>Номер телефона</h3>
                            <div className={classes.number}>{p.number}</div>
                            <div className={classes.number}>{p.number_second}</div>
                            <h3 className={classes.block}>Email</h3>
                            <div className={classes.number}>{p.email}</div>
                        </div>
                    ))}
                    <h3 className={classes.block}>Адрес</h3>
                    <div className={classes.number}>Бишкек/ул.Мира№26</div>
                    <NavLink to={'/about-us/callback'} className={classes.btn}>Заказать звонок</NavLink>
                </div>
                <iframe className={classes.maps}
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1503089.685065611!2d73.98598728289637!3d42.62485068389512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3899315e98a28049%3A0x8093082b1ff0acbb!2sChuy%20Province!5e0!3m2!1sen!2skg!4v1612088126484!5m2!1sen!2skg"
                        width="100%" height="100%" frameBorder="0"
                        tabIndex="5"/>
            </div>
            </Grid>
        </>
    )
}
export default Contacts
