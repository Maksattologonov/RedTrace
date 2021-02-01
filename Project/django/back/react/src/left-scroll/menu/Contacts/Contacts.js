import React from 'react'
import classes from './Contacts.module.scss'
import {useState} from "react";
import Input from "./Input/Inputs";
import Button from "../../../UI/Button/Button";

const Contacts = () => {

    const [buttonPopup, setButtonPopup] = useState(false);

    return (
        <div className={classes.wrap + 'container'}>
            <div className={classes.main}><h1>Контакты</h1>
                <div className={classes.block}>
                    Номер телефона
                    <div className={classes.number}>+996709449495</div>
                    <div className={classes.number}>+996551449495</div>
                </div>
                <div className={classes.block}>
                    Email
                    <div className={classes.number}>maksattologonovn@gmail.com</div>
                </div>
                <div className={classes.block}>
                    Адрес
                    <div className={classes.number}>Бишкек/ул.Мира№26</div>
                </div>
               <Button onClick={()=> setButtonPopup(true)} text={'Заказать звонок'} type={'btn'}/>
            </div>
            <iframe className={classes.maps}
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1503089.685065611!2d73.98598728289637!3d42.62485068389512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3899315e98a28049%3A0x8093082b1ff0acbb!2sChuy%20Province!5e0!3m2!1sen!2skg!4v1612088126484!5m2!1sen!2skg"
                    width="100%" height="100%"   frameBorder="0"
                    tabIndex="5"/>>
            <Input trigger={buttonPopup} setTrigger={setButtonPopup}/>
        </div>
    )
}
export default Contacts