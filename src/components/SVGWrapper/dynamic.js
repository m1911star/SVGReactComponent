import React, { Component } from 'react';

class App extends Component {
  state = {
    AsyncComponent: () => <div>Nothing loaded</div>,
  };

  async componentDidMount() {
    const { type="Add" } = this.props;
    const module = await import(`./source/${type}`);
    const AsyncComponent = module.default;
    this.setState({ AsyncComponent });
  }

  render() {
    const { AsyncComponent } = this.state;

    return <AsyncComponent {...this.props}/>;
  }
}

export default App;