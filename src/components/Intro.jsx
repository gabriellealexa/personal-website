import React from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';

class Intro extends React.Component {
  constructor() {
    super()
    this.state = {
      
    }
  }
  render(){
    return (
<div className="intro">
<Container>
      <br />
  <center><Image src="http://code.gabriellealexa.com/gabcodeicon2.png" fluid /></center>
      <h3>I'm a writer, software developer, content creator, and thought leader in the sexuality space.</h3>
      With over 25 thousand followers on Instagram and 9 thousand followers on Twitter, I am the quintessence of being very online. I've been featured in Bustle, Well and Good, and Cherry Magazine, and provided insight for Rolling Stone, Refinery29, Women's Health Magazine, and more.
      <br /><br />
  </Container>
  </div>
  )};
}
export default Intro;