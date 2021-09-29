import React, { Component } from 'react'
import PropTypes from 'prop-types'


export class Navbar extends Component {
    // Default Props
    static defaultProps = {
        title: 'Github Finder',
        icon: 'fab fa-github'
    };

    // PropTypes => Used to set the "Type" for the Props
    static propTypes = {
        title: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired
    }

    render() {
        return (
            <nav className="navbar bg-primary">
                <h1>
                    {/* <i className="fab fa-github"/> Navbar */}
                    {/* <i className="fab fa-github"/> {this.props.title} */}
                    <i className={this.props.icon}/> {this.props.title}
                </h1>
            </nav>
        )
    }
}

export default Navbar
