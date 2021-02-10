import React, {useEffect, useState} from 'react'
import classes from "./Instruments.module.scss";
import Card from "react-animated-3d-card";
import axios from "axios";


const headerStyle = {
    width: '250px',
    height: '250px',
    backgroundColor: '#eb3b5a',
    position: 'relative'
};


const Instruments = () => {

    const [instrument, setInstrument] = useState([])
    useEffect(() => {
        axios({
            method: "GET",
            url: "http://127.0.0.1:8000/api/instruments",
        }).then(response => {
            setInstrument(response.data)
        })
    }, [])

    return (
        <div className={classes.main}>
            {instrument.map(item => (
                <div className={classes.wrap} key={item.id}>
                    <Card
                        className={classes.main}
                        style={headerStyle}
                    >
                        <img src={item.image} alt='none' className={classes.img}/>
                        <h1 className={classes.text}>{item.name}</h1>
                    </Card>
                </div>
            ))}
        </div>
    )
}
export default Instruments