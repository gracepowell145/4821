import React, {Component} from "react";
import "../App.css";

export default class Header extends Component{
    render(){
        return(
            <div className="header">
                <p>About</p>
                <p>Contact us</p>
                <button>Login</button>
                <button> Register</button>
            </div>
        )
    }
}