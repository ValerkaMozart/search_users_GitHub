import React from "react"
import classes from './NavBar.module.css'
import {NavLink} from 'react-router-dom'

function NavBar () {
    let active_style = {
        color: 'red'
    }

    return (
        <nav className={classes.NavBar}>
            <div className={classes.search}>
                GitHub Поиск
            </div>
            <ul className={classes.ulBar}>
                <li>
                    <NavLink activeStyle={active_style} exact to="/">Главная</NavLink>
                </li>
                <li>
                    <NavLink activeStyle={active_style} to="/about">Информация</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar