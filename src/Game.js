import React from "react";
import Square from "./Square";
import Board from "./Board";

class TicTac extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>Tic Tac and Toe</h1>
        <Board />
      </div>
    );
  }
}

export default TicTac;
