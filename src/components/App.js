import React, { Component } from 'react';
import loading from '../images/giphy.gif';
import '../stylesheets/App.css';

class App extends Component {

  constructor(){
    super();
    this.state = {
      loading: true,
      userData: {}
    };
  }

  async componentDidMount(){
    const response = await fetch('https://api.github.com/users/joewalnes');
    const data = await response.json();
    this.setState({userData: data, loading: false});
  }
  
  render() {
    if (this.state.loading){
      return  (
        <div className="App">
          <img src={loading} />
        </div>
      );
    }
    else {
      return (
        <div className="App">
          <img src={this.state.userData.avatar_url} />
          <p>{this.state.userData.login}</p>
        </div>
      )
    }
  }
}

export default App;
