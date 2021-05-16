// initial state and actions

import React, {useReducer} from 'react'
import axios from 'axios'

import GithubContext from './githubContext'
import GithubReducer from './githubReducer'

import {SEARCH_USERS, SET_LOADING, CLEAR_USERS, GET_REPOS, GET_USER} from '../types'

// init 
let githubClientId;
let githubClientSecret;

if(process.env.NODE_ENV !== "production") {
    githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
    githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
} else {
    githubClientId = process.env.GITHUB_CLIENT_ID;
    githubClientSecret = process.env.GITHUB_CLIENT_SECRET;
}

const GithubState = props => {
    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false
    }

    const [state, dispatch] = useReducer(GithubReducer, initialState);

    // Search Github users
    const searchUsers = async (text) => {
        // the text comes from the state from Search.js

        // while fetching loading is true, show spinner
        setLoading();
        
        // fetching...
        const res = await axios.get(`https:api.github.com/search/users?q=${text}&client_id=${githubClientId}&client_secret=${githubClientSecret}`)
        // console.log(res)
        // console.log(res) >>> object with a lot of object one of them is called data  containing another object called item and it is an object not JSON containing all the users that contain that input
        
        // when the data is fetched set the users displayed to res.data.items and loading to false
        dispatch({type: SEARCH_USERS, payload: res.data.items})
    }

    // Get a Single Github user
        const getUser = async (username) => {
            // the username comes  from User.js from the prop

            // while fetching loading is true, show spinner
            setLoading();

            // fetching...
            const res = await axios.get(`https:api.github.com/users/${username}?client_id=${githubClientId}&client_secret=${githubClientSecret}`)
            // console.log(res)
            // console.log(res) >>> object with a lot of object one of them is called data and it is an object not JSON 

            // when the data is fetched set the user from State to res.data and loading to false
            dispatch({type:GET_USER, payload: res.data})
    }

      //  GET USER LATEST REPOS
        const getUserRepos = async (username) => {
            setLoading();

            // fetching...
            const res = await axios.get(`https:api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${githubClientId}&client_secret=${githubClientSecret}`)
            // console.log(res)

            dispatch({type: GET_REPOS, payload: res.data})
        }


    // Clear Users from state
    const clearUsers = () => {
        dispatch({type: CLEAR_USERS})
    }

    // Set Loading
    const setLoading = () => dispatch({type: SET_LOADING});

    return (
        <GithubContext.Provider value = {{
            users: state.users,
            user: state.user,
            repos: state.repos,
            loading: state.loading,
            searchUsers,
            clearUsers,
            getUser,
            getUserRepos
        }}
        >
            {props.children}
        </GithubContext.Provider>
    );

}

export default GithubState