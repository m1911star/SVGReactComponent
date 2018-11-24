import React, { Component } from 'react';
import SVGWrapper from './components/SVGWrapper';
import './App.css';

class App extends Component {
  state = {
    type: 'Add'
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <button className="App-button" onClick={() => this.setState({
            type: this.state.type ==='Kanban' ? 'Add' : 'Kanban'
          })}>切换 Icon</button>
          <SVGWrapper type={this.state.type} className="App-icon"/>
        </header>
      </div>
    );
  }
}

export default App;
