import React from 'react';
import Header from './components/Header'
import './App.scss';

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
   </div>
  )};
}

export default App;
