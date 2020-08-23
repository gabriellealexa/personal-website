import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

class Intro extends React.Component {
  constructor() {
    super()
    this.state = {
      
    }
  }

  render(){
    return (
        <div className="nav-container-container">
<Navbar 
        className="nav-container"
        collapseOnSelect 
        sticky="bottom" 
        expand="md">
<Nav fluid className="nav"
    defaultActiveKey="/home" 
    >
<Nav.Link className="nav-item" href="/">Home</Nav.Link>
<Nav.Link className="nav-item" href="/about">About</Nav.Link>
<Nav.Link className="nav-item" href="/writing"> Selected Writing</Nav.Link>
<Nav.Link className="nav-item" href="/coding">Coding</Nav.Link>
</Nav>
</Navbar>
</div>
  )};
}
export default Intro;