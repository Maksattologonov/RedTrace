import React from 'react'
import LeftScroll from "./left-scroll/LeftScroll";
import Main from "./main/main";
import RightScroll from "./right-scroll/RightScroll";
import {Switch, Route} from 'react-router-dom'

const App = props => {
    return (
            <Switch>
                <Route exact component={LeftScroll}/>
                <Route exact component={Main}/>
                <Route exact component={RightScroll} path='/about-us'/>
            </Switch>
    )
}
export default App