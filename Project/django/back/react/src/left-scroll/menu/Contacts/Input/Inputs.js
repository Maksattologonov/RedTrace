import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {NavLink} from "react-router-dom";
import PhoneIcon from '@material-ui/icons/Phone';
import {CssBaseline} from "@material-ui/core";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(10),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: '10px',
        padding: '5px',
        color: 'white',
        width: '30px',
        height: '30px',
        borderRadius: '50%',
        backgroundColor: '#1e272e'
    },
    form: {
        width: '100%',
        color: '#1e272e'// Fix IE 11 issue.
    },
    submit: {
        margin: theme.spacing(2, 0, 2),
        backgroundColor: '#1e272e'
    },
}));

export default function Input() {

    const classes = useStyles();

    const submit = e => {
        let name = e.target[0].value;
        let dob = e.target[1].value;
        let creditlimit = e.target[2].value;
        let data = {
            name,
            dob,
            creditlimit
        };
        postCustomer(data);
    };


    const postCustomer = data => {
        axios
            .post('http://127.0.0.1:8000/api/call/', data.json())
            .then(d=> {
                console.log(d)
            })
            .catch(err => alert(err))
    }

    return (
        <Container component="main" maxWidth="sm">
            <CssBaseline/>
            <div className={classes.paper}>
                <PhoneIcon className={classes.avatar}>
                    <LockOutlinedIcon/>
                </PhoneIcon>
                <Typography component="h1" variant="h5">
                    Заказать звонок
                </Typography>
                <form className={classes.form} onSubmit={e => {
                    e.preventDefault();
                    submit(e);
                }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="fname"
                                name="firstName"
                                variant="outlined"
                                required
                                fullWidth
                                id="firstName"
                                label="Имя"
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="lastName"
                                label="Фамилия"
                                name="lastName"
                                autoComplete="lname"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="number"
                                type='number'
                                label="Номер телефона"
                                name="number"
                                autoComplete="number"

                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="Email почта"
                                name="email"
                                autoComplete="email"
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                fullWidth
                                name="text"
                                label="Оставьте коментарии"
                                type="text"
                                id="text"
                                autoComplete="text"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <h6>Когда вам удобно принять вызов</h6>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="time"
                                label=""
                                type="datetime-local"
                                id="time"
                                autoComplete="date"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={<Checkbox value="allowExtraEmails" color="primary"/>}
                                label="Только написать"
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Отправить
                    </Button>
                    <Grid container justify="flex-end">
                        <Grid item>
                            <NavLink to="/about-us/contacts" variant="body2" style={{color: '#1e272e'}}>
                                Вернуться назад
                            </NavLink>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    );
}