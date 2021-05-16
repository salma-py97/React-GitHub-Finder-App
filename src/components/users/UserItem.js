// _rafce
// impt
import PropTypes from 'prop-types'

import {Link} from 'react-router-dom'

// destructuring getting {login, avatar_url, html_url} from props.user that is passed in as a prop user={users} in Users.js
const UserItem=({user:{login, avatar_url}}) => {
    return (
        <div className="card text-center">
            <img src={avatar_url} className="round-img" style={{width: '60px'}} alt="" />

            <h3>{login}</h3>
            <div>
                <Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1">More</Link>
            </div>
        </div>
    )
}
UserItem.propTypes = {
    // user: ptor, pt: proptypes/ o:object/ r:isRequired
    user: PropTypes.object.isRequired,
}
export default UserItem
