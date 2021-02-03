import React from 'react'
import classes from "./Instruments.module.scss";
import Card from "react-animated-3d-card";
import img from '../../../logo.svg'
import {Container} from "@material-ui/core";


const headerStyle = {
    width: '250px',
    height: '250px',
    backgroundColor: '#eb3b5a',
    position: 'relative'
};


const Instruments = () => {
    return (
        <div className={classes.main}>
            <div className={classes.wrap}>
                <Card
                    className={classes.main}
                    style={headerStyle}
                >
                    <img src={img} alt='none' className={classes.img}/>
                    <h1 className={classes.text}>React</h1>
                </Card>
            </div>
        </div>
    )
}
export default Instruments