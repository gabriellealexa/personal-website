import React from 'react';
import PortfolioCard from './PortfolioCard';
import CardDeck from 'react-bootstrap/CardDeck';
import articles from './articles.js';

class Portfolio extends React.Component {
  constructor() {
    super()
    this.state = {
        articles: articles
      
    }
  }

  render(){
    return (
<div className="portfolio-grid">
  <br />
      <CardDeck className="portfolio">
        { this.state.articles.map(articleObj => {
            return <PortfolioCard article={articleObj} key={this.state.articles.id} />
        })}
</CardDeck>
</div>
    )};
  }
  export default Portfolio;