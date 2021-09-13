import React, {useContext, useEffect} from "react"
import classes from './Profile.module.css'
import {StateContext} from "../../Context/Context";
import axios from "axios";
import LoaderCss from "../Home/LoaderCss/LoaderCss";
import Repos from "../Repos/Repos";

function Profile (props) {
    let context = useContext(StateContext)
    let name = props.match.params.name
    let CLIENT_ID = process.env.REACT_APP_CLIENT_ID
    let CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET
    let returnUrl = url => {
        return `${url}client_ad=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
    }
    let getUser = async () => {
        context.setLoading()
        try {
            let response = await axios.get(
                returnUrl(`https://api.github.com/users/${name}?`)
            )
            context.getUser(response.data)
        }
        catch (err) {
            console.log(err)
        }
    }
    let getRepos = async () => {
        context.setLoading()
        try {
            let response = await axios.get(
                returnUrl(`https://api.github.com/users/${name}/repos?per_page=5&`)
            )
            context.getRepos(response.data)
        }
        catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getRepos(name)
        getUser(name)
        // eslint-disable-next-line
    }, [])



    return (

        <div className={classes.Profile}>
            { context.loading ? <div className={classes.loader}><LoaderCss /></div> :
                <div>
                    <h2>Profile {name}</h2>
                    <div className={classes.info}>
                        <img src={context.user.avatar_url} alt={context.user.login}/>
                        <div className={classes.userInfo}>
                            {context.user.location ? <p>Местоположение {context.user.location}</p> : null}
                            <p>Подписчики: {context.user.followers}</p>
                            <p><a href={context.user.html_url} rel="noreferrer" target={'_blank'}>Открыть профиль</a></p>
                            { context.user.bio ? <p> BIO : {context.user.bio}</p> : null }
                            { context.user.company ? <p>Компания :{context.user.company}</p> : null }
                            { context.user.blog ? <p>Личный блог :{context.user.blog}</p> : null }
                            <p>Репозитории : {context.user.public_repos}</p>
                            <p>Gists : {context.user.public_gists}</p>
                        </div>
                    </div>
                    <Repos context={context} />
                </div>
            }
        </div>
    )
}

export default Profile