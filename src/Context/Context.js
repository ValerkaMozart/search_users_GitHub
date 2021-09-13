import React, {useState} from "react"

export let StateContext = React.createContext()

function Context(props) {
    let [state, setState] = useState({
        alert: false,
        alertText: '',
        user: {},
        users: [],
        loading: false,
        repos: []
    })
    let contextData = {
        alert: state.alert,
        alertText: state.alertText,
        user: state.user,
        users: state.users,
        loading: state.loading,
        repos: state.repos,
        hideAlert: function () {
            setState(prev => {
                return {...prev, alert: false}
            })
        },
        showAlert: function (text) {
            setState(prev => {
                return {...prev, alert: true, alertText: text}
            })
        },
        searchUsers: function (users) {
            setState(prev => ({...prev, users: users, loading: false}))
        },
        getRepos: function (repos) {
            setState(prev => ({...prev, repos: repos, loading: false}))
        },
        getUser: function (user) {
            setState(prev => ({...prev, user: user, loading: false}))
        },
        setLoading: function () {
            setState(prev => ({...prev, loading: true}))
        },
        clearUsers: function () {
            setState(prev => ({...prev, users: []}))
        }
    }

    return (
        <StateContext.Provider value={contextData}>
            {props.children}
        </StateContext.Provider>
    )
}

export default Context