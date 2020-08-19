import React from 'react';
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'

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
        
            I'm a full stack developer with an appreciation for the social elements of tech. I love how it can be used to enhance relationships, health/wellness, and advocacy.<br /><br />
            
            From a very young age, I fell in love with HTML, CSS, and vanilla JavaScript. I did, after all, grow up during the Neopets/Myspace era of the Internet. As a student at Laguardia Community College, I learned even more about frontend web development and the full Adobe Creative Suite. And finally, I honed those skills at Flatiron School, an immersive bootcamp that focused on Ruby, Sinatra, Ruby on Rails, vanilla JavaScript, and React.
            <br /><br />
            <center>
            <Button href="#">Github</Button> <Button href="#">Medium</Button> <Button href="#">Resume</Button>
  </center><br /><br />

  <h2>current projects:</h2>
  <Row className="center-row">
    <Card className="project-card" style={{ width: '18rem', margin: '30px' }}>
  <Card.Body>
    <Card.Title>Untitled</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">RoR, JS, React</Card.Subtitle>
    <Card.Text>
      At the confluence of racism and homophobia, very little Black LGBTQ+ history is taught in schools. This web application is meant to explore that history and allow users to reinforce their knowledge.
    </Card.Text>
  </Card.Body>
  <Card.Footer>
    <Card.Link href="#">Github</Card.Link>
    <Card.Link href="#">Demo</Card.Link>
    </Card.Footer>
</Card> 
{' '}
<Card className="project-card" style={{ width: '18rem', margin: '30px'}}>
  <Card.Body>
    <Card.Title>Petit Bain</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">RoR, JS, React</Card.Subtitle>
    <Card.Text>
    A web app with mutual aid resources, including bail funds, food aid, and more. Users can also save resources, organizers, and groups that they are interested in.
    </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Card.Link href="#">Github</Card.Link>
    <Card.Link href="#">Demo</Card.Link>
    </Card.Footer>
</Card>
</Row>
    <br /><br />
  </Container>
</div>
    )};
  }
  export default Coding;