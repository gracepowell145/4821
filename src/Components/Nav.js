import React, {Component} from "react";
import {Link} from 'react-router-dom';
import '../App.css';

function Nav(){
    return (
        <nav className="nav">   
            <h3>Logo</h3>
            <ul>
                <Link to ='/about'>
                    <li>About</li>
                </Link>    
              
                <Link to='/contact'>    
                    <li>Contact</li>
                </Link>

                <Link to='/login'>
                    <li>Log in</li>
                </Link>

                <Link to='register'>
                    <li>Register</li>
                </Link>
            </ul>

        </nav>
    )
}

export default Nav;
