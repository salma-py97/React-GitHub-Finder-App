import UserItem from './UserItem'
import Spinner from '../layout/Spinner'

import {useContext} from 'react'
import GithubContext from '../../context/github/githubContext'


const Users = () => {
    // initialize GithubContext with githubContext (Mind the Casing)
    const githubContext = useContext(GithubContext);

    // destruction githubContext
    const {loading, users} = githubContext;

    if(loading) {
        return <Spinner />
    } else {
        return (
            <div style={userStyle}>
                {/* loop through users with map and create a list */}
                {users.map(user => (
                    // Pass in the whole single user as a prop in UserItem and cantch it in UserItem.js
                    <UserItem key={user.id} user={user} />)
                )}
            </div>
        )
    }

}

// CSS in react
const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap : "1rem"
}


export default Users
