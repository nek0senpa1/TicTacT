import React from "react";

class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: ""
    };
  }

  clicked = event => {};

  render() {
    return (
      <div class="square" onClick={this.props.clicker}>
        {this.state.current}
      </div>
    );
  }
}

export default Square;
