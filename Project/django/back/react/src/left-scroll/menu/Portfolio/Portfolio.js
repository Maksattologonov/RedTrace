import React, {Component} from "react";
import Card from 'react-animated-3d-card'
import classes from './Portfolio.module.scss'
import {Link} from "react-router-dom";

const headerStyle = {
    width: '300px',
    height: '300px',
    backgroundColor: '#eb3b5a',
    marginTop: '30%',
};

class Portfolio extends Component {
    render() {
        return (
            <div className={classes.wrap}>
                <Link href={`/` + this.props.link}>
                    <Card
                        className={classes.main}
                        style={headerStyle}
                        onClick={() => console.log('Card clicked')}
                    >
                        <img src={this.props.img} alt="none" className={classes.img}/>
                        <h1 className={classes.text}>{this.props.text}</h1>
                    </Card>
                </Link>
            </div>
        )
    }
}

export default Portfolio
