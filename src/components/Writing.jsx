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
          <h2>about the writer:</h2>
      You may have seen my words in Playboy, the Huffington Post, Elle, Harper's Bazaar, etc. I cover topics within sexuality, identity, and pop culture.
      <br /><br />
      My first book, titled "How To Live With The Internet And Not Let It Run Your Life", comes out in March 2021 with Smith Street Books.<br />
      You can preorder it <a href="https://www.target.com/p/how-to-live-with-the-internet-and-not-let-it-run-your-life-by-gabrielle-alexa-noel-hardcover/-/A-81089989">here</a>.<br /><br />
      </Container>
    <Portfolio />
</div>
    )};
  }
  export default Writing;