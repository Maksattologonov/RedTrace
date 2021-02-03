import React from 'react'
import website from './website.jpg'
import promotion from './promotion.jpg'
import upgrade from './upgrade.jpg'
import support from './support.jpg'
import smartphone from './smartphone.jpg'
import classes from './Services.module.scss'
import {Container} from "@material-ui/core";

const Service = props => {

    return (
            <Container  fluid>
            <div className={classes.main}>
                    <div className={classes.block}>
                        <img src={website} alt={'website'} className={classes.img}/>
                        <div className={classes.text}><h1 className={classes.h1}>Создание Веб сайтов</h1>Создание веб сайта любой сложности,
                            только новыми технологиями
                        </div>
                    </div>
                    <div className={classes.block}>
                        <img src={promotion} alt={'promotion'} className={classes.img}/>
                        <div className={classes.text}>
                            <h1 className={classes.h1}>Продвижение сайта</h1>Продвижение вашего сайта для медийности и продвижения бизнеса
                        </div>
                    </div>
                    <div className={classes.block}>
                        <img src={support} alt={'support'} className={classes.img}/>
                        <div className={classes.text}><h1 className={classes.h1}>Поддержка сайта</h1>Поддержка сайта для стабильности и росту
                            бизнеса
                        </div>
                    </div>
                    <div className={classes.block}>
                        <img src={upgrade} alt={'upgrade'} className={classes.img}/>
                        <div className={classes.text}><h1 className={classes.h1}>Обновление</h1>Если на вашем сайте не хватает дополнительных
                            функций или же
                            его надо видоизменить
                            обращайтесь к нам
                        </div>
                    </div>
                    <div className={classes.block}>
                        <img src={smartphone} alt={"smartphone"} className={classes.img}/>
                        <div className={classes.text}><h1 className={classes.h1}>Приложение для смартфонов</h1>Сделаем приложение для IOS и
                            Android
                        </div>
                    </div>
                </div>
        </Container>
    )
}
export default Service