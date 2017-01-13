import React from 'react';
import {Point} from 'components/Point';

class App extends React.Component {
  constructor(props, context) {
    super(props, context);

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
      <div style={{position: 'relative'}}>
        {points.map((point, index) => <Point key={index} left={point.left} top={point.top}/>)}
      </div>
    );
  }
}

export default App;
