import React, {useEffect, useState} from "react";
import Card from 'react-animated-3d-card'
import classes from './Portfolio.module.scss'
import axios from "axios";

const headerStyle = {
    width: '300px',
    height: '300px',
    backgroundColor: '#eb3b5a',
    marginTop: '30%',
};

const Portfolio = ()=> {

const [portfolio, setPortfolio] = useState([])
useEffect(() => {
    axios({
        method: "GET",
        url: "http://127.0.0.1:8000/api/portfolio",
    }).then(response => {
        setPortfolio(response.data)
    })
}, [])


    return (
        <div className={classes.main}>
        {portfolio.map(p=>(
            <div className={classes.wrap} key={p.id}>
                    <Card
                        className={classes.main}
                        style={headerStyle}
                        onClick={() => window.location.href = p.url}
                    >
                        <img src={p.image} alt="none" className={classes.img}/>
                        <h1 className={classes.text}>{p.name}</h1>
                    </Card>
            </div>))}
        </div>
        )
}

export default Portfolio
