import React, {Component} from "react"; 
import "../App.css"

export default class HomePage extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div className="homePage"> 
                <h1>4821 Unlocked Potential</h1>
                <p className='quote'>'Working hard instead of having a hard day, are we?'</p>
            </div>
        )
    }
}