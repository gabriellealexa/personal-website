import React from 'react';
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

class Coding extends React.Component {
  constructor() {
    super()
    this.state = {
      
    }
  }
  render(){
    return (
<div className="coding">

<Container>
          <br />
          <h2>about the developer:</h2>
        
            I'm a full stack developer with a passion for sexual health and social justice. I love to build rich user experiences, using <a href="https://en.wikipedia.org/wiki/Don%27t_repeat_yourself">DRY</a>, well-documented code. My current toolbox includes HTML, CSS, Bootstrap, Sass, JavaScript, Ruby, Ruby on Rails, PostgreSQL, and React.
            <br /><br />
            <center>
            <Button className="button-style" href="https://github.com/gabriellealexa">Github</Button> <Button className="button-style" href="https://medium.com/@gabalexa">Medium</Button> <Button className="button-style" href="http://code.gabriellealexa.com/resume.pdf">Resume</Button>
  </center><br /><br />
  </Container>

  <Container>
  <h2>currently:</h2>
<center>
    <Card className="project-card">
  <Card.Body>
    <Card.Title>Info Riot (Backend)</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Ruby, Rails</Card.Subtitle>
    <Card.Text>
      This web application is meant to explore underrepresented history and allow users to reinforce their knowledge.
    </Card.Text>
  </Card.Body>
  <Card.Footer>
    <Card.Link href="https://github.com/gabriellealexa/inforiot-backend">Github</Card.Link>
    </Card.Footer> 
</Card>
<br />
<Card className="project-card">
  <Card.Body>
    <Card.Title>Info Riot (Frontend)</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">HTML/CSS, JS, React</Card.Subtitle>
    <Card.Text>
      This web application is meant to explore underrepresented history and allow users to reinforce their knowledge.
    </Card.Text>
  </Card.Body>
  <Card.Footer>
    <Card.Link href="https://github.com/gabriellealexa/inforiot-frontend">Github</Card.Link>
    </Card.Footer> 
</Card> 
    <br /><br />
    </center>
    </Container>
</div>
    )};
  }
  export default Coding;