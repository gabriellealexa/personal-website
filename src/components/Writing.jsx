import React from 'react';
import Container from 'react-bootstrap/Container';
import Portfolio from './Portfolio'

class Writing extends React.Component {
  constructor() {
    super()
    this.state = {
      
    }
  }
  render(){
    return (
<div className="writing">
      <Container>
          <br />
      I cover topics within sexuality, identity, and pop/internet culture. Here, you'll find reported pieces, interviews, and essays that I've written for various digital publications. For blogs I've written on technical subjects, follow me on Medium <a href="http://medium.com/@gabalexa">here</a>.
      <br /><br />
      To hire me, email me at <b>gabby (at) gabriellealexa.com</b>.
      <br /><br />
      </Container>
    <Portfolio />
</div>
    )};
  }
  export default Writing;