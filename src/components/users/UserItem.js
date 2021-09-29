import React, { Component } from 'react'

class UserItem extends Component {
    // Using constructor for making state , runs automatically when the component runs
    // constructor() {
    //     //! we need to call super to call a parent class constructor
    //     super()
    //     // console.log(123)
    //     this.state = {
    //         id: 'id',
    //         login: 'mojombo',
    //         avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
    //         html_url: 'https://github.com/mojombo'
    //     }
    // }

    // It is not a necessary to give state in a constructor
    state = {
        id: 'id',
        login: 'mojombo',
        avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
        html_url: 'https://github.com/mojombo'
    }

    render() {
        //! Here we are destructuring 
        const {login,avatar_url,html_url} = this.state;

        return (
            <div className="card text-center">
                {/* This is UserItem */}
                {/* we are giving width using inline CSS */}
                {/* <img src={this.state.avatar_url} alt="" className="round-img" style={{ width: '60px' }} /> */}
                <img src={avatar_url} alt="" className="round-img" style={{ width: '60px' }} />
                {/* <h3>{this.state.login}</h3> */}
                <h3>{login}</h3>
                <div>
                    {/* <a href={this.state.html_url} className="btn btn-dark btn-sm my-1">More</a> */}
                    <a href={html_url} className="btn btn-dark btn-sm my-1">More</a>
                </div>
            </div>
        )
    }
}

export default UserItem
