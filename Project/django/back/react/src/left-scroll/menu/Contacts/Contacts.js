import React, {useEffect} from 'react'
import classes from './Contacts.module.scss'
import {useState} from "react";
import axios from "axios";
import {NavLink} from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Media from 'react-media';
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";

const Contacts = () => {

    const useStyles = makeStyles((theme) => ({
        paper: {
            marginTop: theme.spacing(10),
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        avatar: {
            margin:'10px',
            padding:'5px',
            color: 'white',
            width:'30px',
            height: '30px',
            borderRadius: '50%',
            backgroundColor: '#1e272e'
        },
        form: {
            width: '100%',
            color:'#1e272e'// Fix IE 11 issue.
        },
        submit: {
            margin: theme.spacing(2, 0, 2),
            backgroundColor: '#1e272e'
        },
    }));

    const [projects, setProjects] = useState([])
    useEffect(() => {
        axios({
            method: "GET",
            url: 'http://127.0.0.1:8000/api/contact'
        }).then(response => {
            setProjects(response.data)
        })
    }, [])

    const styles = useStyles();

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
                        <NavLink to={'/about-us/callback'} className={classes.btn}>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={styles.submit}
                            >
                                Заказать звонок
                            </Button>
                        </NavLink>
                    </div>
                    <Media query="(min-width: 770px)">
                        {matches => {
                            return matches ?
                                <iframe className={classes.maps}
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1503089.685065611!2d73.98598728289637!3d42.62485068389512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3899315e98a28049%3A0x8093082b1ff0acbb!2sChuy%20Province!5e0!3m2!1sen!2skg!4v1612088126484!5m2!1sen!2skg"
                                        width="100%" height="100%" frameBorder="0"
                                        tabIndex="5"/> : " "
                        }}
                    </Media>
                </div>
            </Grid>
        </>
    )
}
export default Contacts
