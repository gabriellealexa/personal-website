import React from 'react';
import Welcome from './components/Welcome'
import Nav from './components/Nav'
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Writing from './components/Writing';
import Coding from './components/Coding';
import About from './components/About';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      
    }
  }

  render(){

  return (
    <div className="App">
    <link href="https://fonts.googleapis.com/css2?family=Questrial&display=swap" rel="stylesheet" />
    
      <Router>
        <Route path="/" component={Nav} />
        <br />
        <Route exact path="/" component={Welcome} />
        <Route path="/writing" component={Writing} />
        <Route path="/coding" component={Coding} />
        <Route path="/about" component={About} />
      </Router>
   </div>
  )};
}

export default App;
