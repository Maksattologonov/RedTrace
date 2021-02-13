import React from "react";
import {a, useTrail} from "react-spring";
import classes from './Trail.module.scss'

function Trail({ open, children, ...props }) {
    const items = React.Children.toArray(children)
    const trail = useTrail(items.length, {
        config: { mass: 10, tension: 1500, friction: 150 },
        opacity: open ? 1 : 0,
        x: open ? 0 : 100,
        height: open ? 110 : 0,
        from: { opacity: 0, x: 20, height: 5 },
    })


    return (
        <div className={classes.trailsMain} {...props} style={{padding: 0, margin: 0, top: '120px'}}>
            <div>
                {trail.map(({ x, height, ...rest }, index) => (
                    <a.div
                        key={items[index]}
                        className={classes.trailsText}
                        style={{ ...rest, transform: x.interpolate((x) => `translate3d(0,${x}px,0)`) }}>
                        <a.div style={{ height }}>{items[index]}</a.div>
                    </a.div>
                ))}
            </div>
        </div>
    )
}
export default Trail