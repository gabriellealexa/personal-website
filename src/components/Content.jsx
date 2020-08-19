import React from 'react';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Coding from './Coding'
import Intro from './Intro'
import Writing from './Writing'

class Content extends React.Component {
  constructor() {
    super()
    this.state = {
      
    }
  }
  render(){
    return (
<div className="about-me">

<Tabs defaultActiveKey="Intro" id="uncontrolled-tab-example">
  <Tab eventKey="Intro" title="Intro">
  <Intro />
  </Tab>
  <Tab eventKey="Writing" title="Writing">
  <Writing />
  </Tab>
  <Tab eventKey="Coding" title="Coding">
      <Coding />
  </Tab>
  <Tab eventKey="Speaking" title="Speaking" disabled>
      {''}
  </Tab>
  <Tab eventKey="Media" title="Media" disabled>
      {''}
  </Tab>
  <Tab eventKey="Brand Partnership" title="Brand Partnership" disabled>
      {''}
  </Tab>
  <Tab eventKey="Book" title="Book" disabled>
      {''}
  </Tab>
</Tabs>

</div>
    )};
  }
  export default Content;