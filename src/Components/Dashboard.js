import React, {Component} from "react"
import '../App.css'

export default class Dashboard extends Component{
    render(){
        return(
            <div className="dashboard">
                <hi> Welcome -----insert user_id Name here</hi> 
                <h2>Today is: -----insert day, date, time</h2>
                
                <p>Today I will:</p>

                <p>3 things I am grateful for today: <br/>
                1._______<br/>
                2._____<br/>
                3.______</p>

            </div>
        )
    }
}