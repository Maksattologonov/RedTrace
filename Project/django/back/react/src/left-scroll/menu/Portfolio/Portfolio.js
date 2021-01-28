import React, {Component} from "react";
import Card from 'react-animated-3d-card'
import classes from './Portfolio.module.scss'

const headerStyle = {
    width: '500px',
    height: '500px',
    backgroundColor: '#eb3b5a',
    position: 'relative'
};

class Portfolio extends Component{
    render(){
        return (
            <div className={classes.wrap}>
                <a href={`/` + this.props.link}>
                <Card
                    className={classes.main}
                    style={headerStyle}
                    onClick={() => console.log('Card clicked')}
                >
                    <img src={this.props.img} alt="none" className={classes.img}/>
                    <h1 className={classes.text}>{this.props.text}</h1>
                </Card>
                </a>
            </div>
        )}
}

export default Portfolio
