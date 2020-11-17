import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './admin.css';

export default class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDataLoaded: false,
            username: '',
            password: ''
        }
    }

    componentDidMount() {
        
    }


    signinClickHandler = (e) => {
        let username = this.state.username;
        let password = this.state.password;
        if (username === 'TowhidAust007' && password === 'TowhidAust007') {
            alert("true")
        } else {
            alert("Please enter correct username and password");
        }
    }

    userNameOnchangeHandler = (e) => {
        this.setState({
            username: e.target.value,
        })
    }

    passwordOnchangeHandler = (e) => {
        this.setState({
            password: e.target.value
        })
    }


    renderAdminPanel = () => {
        
    }


    render() {
        return (
            <>
                <section className="adminPanel">
                    <div className="header">Admin Panel</div>
                    <div className="adminInner">
                        <div className="userID">
                            <label>User ID</label>
                            <input onChange={(e)=>this.userNameOnchangeHandler(e)} type="text" placeholder="user id" />
                        </div>

                        <div className="password">
                            <label>Password</label>
                            <input onChange={(e)=>{this.passwordOnchangeHandler(e)}} type="text" placeholder="password" />
                        </div>
                        <div className="signinButtonDiv">
                            <Link style={{ textDecoration: "none", color: "black", display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}
                                    to={{ pathname: "/AdminDetails" }}>
                                    <button className="signInButton" onClick={(e) => { this.signinClickHandler(e) }}> Sign In </button>
                            </Link>
                        </div>
                    </div>

                    <div className="loginCredentials">
                            <h3>Login Credentials</h3>
                            <div>UserName: TowhidAust007 </div>
                            <div>Password: TowhidAust007 </div>
                    </div>

                    {this.renderAdminPanel()}
                </section>
            </>
        )
    }
}
