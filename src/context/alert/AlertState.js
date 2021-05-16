// initial state and actions

import React, {useReducer} from 'react'

import AlertContext from './alertContext'
import AlertReducer from './alertReducer'

import {SET_ALERT, REMOVE_ALERT} from '../types'

const AlertState = props => {
    const initialState = null;

    const [state, dispatch] = useReducer(AlertReducer, initialState);

    // Set Alert if input is empty and search button clicked
    const setAlert = (msg, type) => {
        dispatch({type: SET_ALERT, payload:{msg:msg, type: type}})
        // since msg: msg and type:type we can write
        // setAlert({msg, type})

        // set Timeout, after 1000ms remove alert
        setTimeout(() => {dispatch({type: REMOVE_ALERT})}, 1000)
    }

    return (
        <AlertContext.Provider value = {{
            alert: state,
            setAlert
        }}
        >
            {props.children}
        </AlertContext.Provider>
    );

}

export default AlertState