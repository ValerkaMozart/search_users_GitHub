import React, {useContext} from "react"
import classes from './Cars.module.css'
import {Link} from "react-router-dom";
import {StateContext} from "../../../Context/Context";

export default function Card() {
    let context = useContext(StateContext)
    if (!context.users) return null



    return context.users.map((user, i) => {
        return (
            <div className={classes.Card} key={i + 1}>
                <img src={user.avatar_url} alt="/avatar"/>
                <hr/>
                <div className={classes.card_body}>
                    <h4>{user.login}</h4>
                    <Link to={"/profile/" +user.login.trim()} className={classes.link}>Открыть информацию</Link>
                </div>
            </div>
        )
    })

}