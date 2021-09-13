import React from "react"
import classes from './Repos.module.css'

function Repos(props) {

    return (
        <div className={classes.Repos}>
            <h3>Список репозитеориев</h3>
            {props.context.repos.map((item, index) => {
                return (
                    <ul key={index + 1} className={classes.reposItem}>
                        <li>
                            <a href={item.html_url} target={'_blank'} rel="noreferrer" >
                                { item.name }
                            </a>
                        </li>
                    </ul>
                )
            })}
        </div>
    )
}

export default Repos