import React from 'react';
import Header from './components/Header'
import Portfolio from './components/Portfolio'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      
    }
  }

  render(){
  return (
    <div className="App">
      <Header />
      <Portfolio />
   </div>
  )};
}

export default App;
