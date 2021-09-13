import React from "react"
import classes from './About.module.css'

function About () {
    return (
        <div className={classes.About}>
            <h2>Информация о проекте:</h2>
            <div>
                <p>Автор проекта: Валерий Жидков</p>
                <p>Email: valerkamozart@gmail.com</p>
            </div>
            <span>Версия <strong>1.0.0</strong></span>
        </div>
    )
}

export default About