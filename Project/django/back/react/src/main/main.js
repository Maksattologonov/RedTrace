import React, {useState} from 'react'
import classes from './main.module.scss'
import Trail from "../UI/Cursor/Trail";
import video from "./crowd.mp4";


const Main = props => {
    const [open, set] = useState(true)
    return (
        <div className={classes.wrap}>
            <video autoPlay muted loop id="myVideo" className={classes.video}
                   style={{position: 'absolute', top: '-20%', right: '0', left: 0, width: '100%', overflowY: 'hidden'}}>
                <source src={video} type="video/mp4"/>
            </video>
            <Trail open={open} onClick={() => set((state) => !state)}>
                <span >IT</span>
                <span style={{color: "white"}}>Company</span>
                <span style={{color: "red"}}>Red</span>
                <span >Trace</span>
            </Trail>
        </div>
    )
}
export default Main