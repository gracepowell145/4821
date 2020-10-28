import React, {Component} from "react";
import {Link} from 'react-router-dom';
import axios from 'axios';

export default class Landing extends Component{
    constructor(props){
        super(props);

        this.state={
            username: '',
            email:'',
            password: '',
            verPassword: '',
            registerView: false, 
    
        }
    }
    handleInput = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    handleToggle = () => {
        this.setState({registerView: !this.state.registerView})
    }

    handleRegister = () => {
// send info needed from req.body. 
//destructer values from state
const {username, email, password, verPassword, picture, registerView} = this.state; //now dont have to refer to this.state all the time
if(password  && password === verPassword){
    axios.post('/api/register', {username, email, password, profilePicture: picture})//posts to register endpoint. send it the info it needs. if names dont match then you have to do name: otherName
    .then(res => {
        //redux functions go here. /dash routes.js
        this.props.history.push('/dash')
    })
    .catch(err => console.log(err))
} else {
    alert("Passwords don't match!");
}
    }

    handleLogin = () => {
        const {email, password} = this.state; //all we need for login
        axios.post('/api/login', {email, password})
            .then( res => {
                //redux function goes here
                this.props.history.push('/dash')
            })
            .catch(err => console.log(err));
        }
render(){
    return(
        <div className='landing-container'>
            <section className='authentication-info'>
                <h1>Welcome to 4810</h1>
                {this.state.registerView
                ? (<>
                    <h3>Register Below</h3>
                    <input 
                        value={this.state.username}
                        name='username'
                        placeholder='Username'
                        onChange={(e) => this.handleInput(e)}/>
                   </>)
                : <h3>Login Below</h3>}
                <input 
                    value={this.state.email}
                    name='email'
                    placeholder='Email'
                    onChange={(e) => this.handleInput(e)}/>
                <input 
                    type='password'
                    value={this.state.password}
                    name='password'
                    placeholder='Password'
                    onChange={(e) => this.handleInput(e)}/>
                {this.state.registerView
                ? (<>
                    <input 
                        type='password'
                        value={this.state.verPassword}
                        name='verPassword'
                        placeholder='Verify Password'
                        onChange={(e) => this.handleInput(e)}/>
                    {/* <input
                        value={this.state.picture}
                        name='picture'
                        placeholder='Profile image URL'
                        onChange={(e) => this.handleInput(e)}/> */}
                    <button onClick={this.handleRegister}>Register</button>
                    <Link to='/dashboard'>    
                        <li>Register</li>
                    </Link>
                    <p>Have an account? <span onClick={this.handleToggle}>Login Here</span></p>
                   </>)
                : (<>
                    <button onClick={this.handleLogin}>Login</button>
                    <p>Don't have an account? <span onClick={this.handleToggle}>Register Here</span></p>
                   </>)}
            </section>
        </div>
    )
}
}