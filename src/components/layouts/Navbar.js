import React from 'react'
import PropTypes from 'prop-types'


// const Navbar = (props) => {
const Navbar = ({ icon,title }) => {

        return (
            <nav className="navbar bg-primary">
                <h1>
                    {/* <i className={props.icon}/> {props.title} */}
                    <i className={icon}/> {title}
                </h1>
            </nav>
        )
}

// Default Props
Navbar.defaultProps = {
    title: 'Github Finder',
    icon: 'fab fa-github'
};

// PropTypes => Used to set the "Type" for the Props
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
}

export default Navbar
