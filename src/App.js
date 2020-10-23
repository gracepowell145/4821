import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './Components/HomePage';
import Header from './Components/Header';
import Register from './Components/Register';
import About from './Components/About';
import Contact from './Components/Contact';
import Dashboard from './Dashboard';

function App() {
  return (
    <div className="App">
      <Header />
      <HomePage />
      <About />
      <Contact />
      <Register/>
      <Dashboard />
    </div>
  );
}

export default App;
