import React, { Component } from 'react';
import Form from './form'
import Words from './words'
import Numbers from './numbers'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sentence:''
    }
  }

  handleInputChanges = sentence => this.setState({sentence})

  render() {
    return (
      <React.Fragment>
        <Form handleInputChanges={this.handleInputChanges}/>
        <Words sentence={this.state.sentence}/>
        <Numbers sentence={this.state.sentence}/>
      </React.Fragment>
    );
  }
}

export default App;
