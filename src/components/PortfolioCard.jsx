import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class PortfolioCard extends React.Component {
  constructor() {
    super()
    this.state = {
      
    }
  }

  render(){
    return (
<div className="portfolio-card">

<Card style={{ width: '100%', height: '100%' }}>
  <Card.Img variant="top" src={this.props.article.img} />
  <Card.Header>
      <small className="text-muted">{this.props.article.publication}</small>
  </Card.Header>
  <Card.Body>
    <Card.Title>{this.props.article.title}</Card.Title>
    <Card.Text>
      {this.props.article.summary}
    </Card.Text>
    </Card.Body>
    <Card.Footer>
    <center><Button variant="primary">Read More</Button></center>
    </Card.Footer>
</Card>

    </div>
    )};
  }
  export default PortfolioCard;