import React from 'react';
import {Point} from 'components/Point';

class App extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      clicks : []
    }
  }

  handleClick(e) {

    const clicks = [
      ...this.state.clicks,
      {
        left: e.clientX - 11,
        top: e.clientY - 11
      }
    ];
    this.setState({clicks});

    // setTimeout((function() {
    //   this.clean();
    // }).bind(this), 1500);
  }

  clean() {
    this.state.clicks.splice(0, 1);
    console.log(this.state.clicks);
    this.setState({clicks: [...this.state.clicks]});
  }

  render() {
    // 1920, 1080
    const points = [
      {left: 170, top: 30},
      {left: 1250, top: 30},
      {left: 660, top: 360},
      {left: 660, top: 30},
      {left: 660, top: 710},
      {left: 10, top: 360},
      {left: 1310, top: 360},
      {left: 1250, top: 710},
      {left: 170, top: 710}
    ];
    return (
      <div style={{position: 'relative', width: 1400, height: 720}} onMouseDown={this.handleClick.bind(this)}>
        {this.state.clicks.map((point, index) => <Point key={index} left={point.left} top={point.top} width={4} height={4} defaultColor={'blue'}/>)}
        {points.map((point, index) => <Point key={index} left={point.left} top={point.top} width={40} height={40} />)}
      </div>
    );
  }
}

export default App;
