import React from 'react';
import ReactDom from 'react-dom';
import Description from './description.js';
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: null
    }
  }

  componentDidMount() {
    fetch("http://localhost:3003/description")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            description: result
          })
        console.log(this.state.description)
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }


  render() {
    if (this.state.description) {
    return (
      <div id="description">
        <Description description={this.state.description}/>
      </div>
      )
   } else {
    return (
      <div> Loading... </div>
      )
   }
  }
}

//ReactDom.render(<App />, document.getElementById('description'));
window.Description = App;