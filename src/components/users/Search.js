import {useState, useContext} from 'react';
import PropTypes from 'prop-types'

import GithubContext from '../../context/github/githubContext'
import AlertContext from '../../context/alert/alertContext'

const Search = () => {
    // initialize GithubContext with githubContext (Mind the Casing)
    const githubContext = useContext(GithubContext);
    const alertContext = useContext(AlertContext);
    // Destructuring githubContext
    const {users, clearUsers, searchUsers} = githubContext
    const {setAlert} = alertContext

    const [text, setText] = useState("")


    const onSubmit = (e) => {
        e.preventDefault();
        // console.log("submitted!!!");

        if (text === "") {
            // putting setAlert in a prop that will passed up to App.js
            setAlert('Please enter something', 'light')
        } else {
            // putting the the text inputted in a prop called searchUsers to pass it UP (not down) to App.js to actually search the users depending on the input
            searchUsers(text);
    
            setText('')
        }

    }
    const onChange = (e) => {
        // this.setText({text: e.target.value})
        setText(e.target.value)
    };
    return (

        <div>
            <form className="form" onSubmit={onSubmit} >
                <input type="text" name="text" value={text} placeholder="Search Users..." onChange={onChange} />
                <input type="submit" value="Search" className="btn btn-dark btn-block" />
            </form>

            {/* if showClear is true show the clear button  */}
            {users.length > 0 && 
            <button className="btn btn-light btn-block" 
            // setting onclick event to a prop method called clearUsers that we need to catch in App.js (passing up a prop)
            onClick={clearUsers}>Clear</button>
            }
        </div>
    )
}


export default Search
