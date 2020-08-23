import React from 'react';
import Container from 'react-bootstrap/Container';
import Media from 'react-bootstrap/Media';

class About extends React.Component {
  constructor() {
    super()
    this.state = {
      
    }
  }
  render(){
    return (
<div className="intro">
<Container>
    <h5>Gabrielle Alexa Noel • She/Her • NYC.</h5>
      I'm a writer, software engineer, digital creator and content manager, and influencer. I am passionate about sex education, social justice, data privacy, and internet and media literacy. My tech toolbox includes: CSS, HTML, Bootstrap, vanilla JavaScript, PostgreSQL, Ruby, Ruby on Rails, and React.
      <br /><br />
      You can find my words in Playboy, the Huffington Post, Elle, Harper's Bazaar, and other digital publications. I'm currently working on my first book, <b>How To Live With The Internet And Not Let It Run Your Life</b>. It's slated for release in March 2021 with Smith Street Books. You can preorder it from Target <a href="https://www.target.com/p/how-to-live-with-the-internet-and-not-let-it-run-your-life-by-gabrielle-alexa-noel-hardcover/-/A-81089989">here</a> or from Amazon <a href="https://www.amazon.com/How-Live-Internet-Your-Life/dp/1922417033/">here</a>.
 <br /><br />
 With over 25 thousand followers on Instagram, I use social media for education, storytelling, and brand/product awareness. I've been featured in Bustle, Well and Good, and Cherry Magazine, and provided insight for Rolling Stone, Refinery29, Women's Health Magazine, and more. I am also a peer educator, leading workshops on cannabis justice, identity, and sexual wellness. 
 </Container>
 </div>
  )};
}
export default About;