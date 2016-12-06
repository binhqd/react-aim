import React from 'react';

class App extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      text: 'Hello World!'
    };
  }

  handleClick(e) {
    this.setState({
      text: 'New Text'
    });
  }

  render() {
    return (
      <div id="container" style={{color: "#ff0000"}}>
        <div className={this.foo == 'foo' ? 'foo' : 'bar'}>
          {this.state.text}
        </div>
        <button onClick={this.handleClick.bind(this)}>Click here</button>
      </div>
    );
  }
}

export default App;
