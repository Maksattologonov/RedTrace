import React, {useEffect, useState} from 'react'
import classes from './Services.module.scss'
import {Container} from "@material-ui/core";
import axios from "axios";

const Service = props => {

    const [service, setService] = useState([])
    useEffect(() => {
        axios({
            method: "GET",
            url: "http://127.0.0.1:8000/api/service",
        }).then(response => {
            setService(response.data)
        })
    }, [])

    return (
        <Container fluid>
            <div className={classes.main}>
                {service.map(p => (
                    <div className={classes.block}>
                            <img src={p.image} alt='none' className={classes.img}/>
                        <div className={classes.text}><h1 className={classes.h1}>{p.title}</h1>
                            {p.text}
                        </div>
                    </div>
                ))}
            </div>
        </Container>
    )
}
export default Service