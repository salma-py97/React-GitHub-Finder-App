// _rafce
// impt
import PropTypes from 'prop-types'

// import Link
import {Link} from 'react-router-dom'


const Navbar = ({icon, title}) => {
    return (
        <nav className="navbar bg-danger">
            <h1><i className={icon}></i> {title}</h1>

            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
        </nav>

    )
}

export default Navbar

Navbar.defaultProps = {
    title: 'Github Finder App',
    icon: 'fas fa-list'
}


Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string
}

   