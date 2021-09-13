import React, {useContext, useState} from "react"
import classes from './Home.module.css'
import Card from "./Card/Card";
import {StateContext} from "../../Context/Context";
import axios from "axios";
import LoaderCss from "./LoaderCss/LoaderCss";

function Home() {
    let context = useContext(StateContext)
    let [value, setValue] = useState('')
    let CLIENT_ID = process.env.REACT_APP_CLIENT_ID
    let CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET

    //Request Function
    let returnUrl = url => {
        return `${url}client_ad=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
    }
    let search = async () => {
        context.setLoading()
        try {
            let response = await axios.get(
                returnUrl(`https://api.github.com/search/users?q=${value}&`)
            )
            if (response.data.items) {
                context.searchUsers(response.data.items)
            }
        } catch (err) {
            console.log(err)
        }
    }

    //End
    let onSubmit = evt => {
        if (evt.key !== 'Enter') {
            return
        }
        context.clearUsers()
        if (value.trim()) {
            search(value.trim())
            context.hideAlert()
        } else {
            context.showAlert('Вы не вписали имя пользователя!')
        }

    }



    return (
        <div className={classes.Home}>
            <input type="text"
                   required
                   onKeyPress={onSubmit}
                   onChange={evt => setValue(evt.target.value)}
                   value={value}
            />
            <div className={classes.label_box}>
                <label htmlFor="input">
                    Впишите имя пользователя с GitHub...
                </label>
            </div>
            <div className={classes.card_area}>
                { context.loading ? <LoaderCss /> : <Card /> }
            </div>

        </div>
    )
}

export default Home