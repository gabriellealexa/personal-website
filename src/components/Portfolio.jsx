import React from 'react';
import PortfolioCard from './PortfolioCard';
import CardDeck from 'react-bootstrap/CardDeck';

class Portfolio extends React.Component {
  constructor() {
    super()
    this.state = {
        articles: []
      
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/articles')
    .then(resp => resp.json())
    .then(articlesObj => {
        this.setState({
            articles: articlesObj
        })
        console.log(this.state.articles)
    })
}

  render(){
    return (
<div className="portfolio-grid">
  <br />
  <center><h2>Portfolio:</h2></center>
      <CardDeck className="portfolio">
        { this.state.articles.map(articleObj => {
            return <PortfolioCard article={articleObj} key={this.state.articles.id} />
        })}
</CardDeck>
</div>
    )};
  }
  export default Portfolio;