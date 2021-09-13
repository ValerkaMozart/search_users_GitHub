import React, {useContext} from "react"
import classes from './Alert.module.css'
import {StateContext} from "../../Context/Context";

function Alert () {
    let stateContext = useContext(StateContext)

    if (!stateContext.alert) return null

    return (
        <div className={classes.Alert}>
            <h3>{stateContext.alertText}</h3>
            <button onClick={() => stateContext.hideAlert()}>
                <i className="fas fa-times-circle"></i>
            </button>
        </div>
    )
}

export default Alert