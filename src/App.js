import React from 'react';
import Header from './components/Header'
import Content from './components/Content'
import './App.scss';
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
      <Content />
   </div>
  )};
}

export default App;
