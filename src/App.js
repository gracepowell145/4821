import React from 'react';
import './App.css';
import HomePage from './Components/HomePage';
import Header from './Components/Header';
// import Register from './Components/Register';
import About from './Components/About';
import Contact from './Components/Contact';
import Landing from './Components/Landing'
import Nav from './Components/Nav';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Dashboard from './Components/Dashboard'

function App() {
  return (
    <Router> 
        <div className="App">
              <Nav/>
              <Switch> 
                <Route exact path='/' component={HomePage}/>
                <Route path='/about' component={About} />
                <Route path ='/contact' component={Contact}/>
                <Route path='/login' component={Landing}/>
                <Route path='/dash' component={Dashboard}/>
                {/* <Route path='/register' component={Register}/> */}
                </Switch>
              
              {/* <Dashboard/> */}
              
                          {/* <Header /> */}
                          {/* <Landing/> */}
                          {/* <Register/> */}
                          {/* <Dashboard /> */}
        </div>
    </Router>
  );
}

export default App;
