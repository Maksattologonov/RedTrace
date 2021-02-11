import React, {useState} from 'react'
import classes from './main.module.scss'
import Trail from "../UI/Cursor/Trail";


const Main = props => {
    const [open, set] = useState(true)
    return (
        <div className={classes.wrap}>
            <Trail open={open} onClick={() => set((state) => !state)}>
                <span>IT</span>
                <span>Company</span>
                <span style={{color: "red"}}>Red</span>
                <span>Trace</span>
            </Trail>
        </div>
    )
}
export default Main