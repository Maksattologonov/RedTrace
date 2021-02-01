import React from 'react'
import classes from './Inputs.module.scss'
import Button from "../../../../UI/Button/Button";
import {Transition} from "react-spring/renderprops-universal";

const Subs = props => {
    return (props.trigger) ? (
        <Transition>
            from={{ transform: 'translateX(0)'  }}
            enter={[{ transform: 'translateX(-100%)' }, {transition: '0.5s'}]}
            leave={[{ transform: 'translateX(0)'  }, {transition: '0.5s'}]}>
        <div className={classes.main}>
            <form className={classes.form} method="post">
                <input type="text" name='name' value='Введите Имя'/>
                <input type="text" name='number' value='Введите номер телефона'/>
                <input type="text" name='info' value='Введите дополнительную информацию'/>
                <Button type='btn' text='Отправить' className={classes.btn}/>
            </form>
            <button className={classes.a} onClick={() => props.setTrigger(false)}>закрыть</button>
        </div>
        </Transition>
    ): ''
}
export default Subs