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

<Card className="p-c">
  <Card.Img variant="top" src={this.props.article.img} />
  <Card.Body>
  <Card.Subtitle>{this.props.article.publication}:</Card.Subtitle>
    <Card.Title>{this.props.article.title}</Card.Title>
    <Card.Text>
      {this.props.article.summary}
    </Card.Text>
    </Card.Body>
    <Card.Footer>
    <center><Button className="button-style" variant="primary">Read More</Button></center>
    </Card.Footer>
</Card>

    </div>
    )};
  }
  export default PortfolioCard;