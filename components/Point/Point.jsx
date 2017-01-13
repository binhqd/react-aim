import React from 'react';

class Point extends React.Component {
  constructor(props, context) {
    super(props, context);

    const point = {
      position: 'absolute',
      width: this.props.width,
      height: this.props.height,
      background: this.props.defaultColor,
      left: this.props.left,
      top: this.props.top
    };

    this.state = {
      point
    }

  }

  gotHit(e) {
    const point = {
      ...this.state.point,
      background: 'red'
    };
    this.setState({point});

    setTimeout((function() {
      this.restore();
    }).bind(this), 300);
  }
  restore() {
    const point = {
      ...this.state.point,
      background: this.props.defaultColor
    };
    this.setState({point});
  }


  render() {
    return (
      <div style={this.state.point} onClick={this.gotHit.bind(this)}>

      </div>
    );
  }
}

Point.defaultProps = {
  width: 15,
  height: 15,
  defaultColor: '#000'
}


export default Point;
