import React from "react";
import Square from "./Square";

// i need 2 players
const play = true;

// i need swith back and forth
// i need to assign a square that equals the player

const player = event => {};

class Board extends React.Component {
  constructor() {
    super();
    this.state = {
      turn: true
    };
  }

  handleclick = event => {
    const whoTurn = this.state.turn ? "X" : "O";
    const ids = document.getElementsByClassName("square");
    event.target.textContent = whoTurn;

    //console.log(whoTurn);
    //console.log(ids[0].textContent)

    //this.setState({ turn: !this.state.turn})

    this.setState(turn => {
      return { turn: !this.state.turn };
    });

    this.towin();
  };

  towin() {
    const ids = document.getElementsByClassName("square");

    if (
      ids[0].textContent === ids[1].textContent &&
      ids[1].textContent === ids[2].textContent
    ) {
      console.log("wins");
    } else {
      console.log("nope");
    }
  }

  render() {
    return (
      <div>
        <div class="board">
          <Square
            class="square 1"
            xturn={this.state.turn}
            clicker={this.handleclick}
          />
          <Square
            class="square 2"
            xturn={this.state.turn}
            clicker={this.handleclick}
          />
          <Square
            class="square 3"
            xturn={this.state.turn}
            clicker={this.handleclick}
          />
        </div>
        <div class="board">
          <Square
            class="square 4"
            id="4"
            xturn={this.state.turn}
            clicker={this.handleclick}
          />
          <Square
            class="square 5"
            id="5"
            xturn={this.state.turn}
            clicker={this.handleclick}
          />
          <Square
            class="square 6"
            id="6"
            xturn={this.state.turn}
            clicker={this.handleclick}
          />
        </div>
        <div class="board">
          <Square
            class="square 7"
            id="7"
            xturn={this.state.turn}
            clicker={this.handleclick}
          />
          <Square
            class="square 8"
            id="8"
            xturn={this.state.turn}
            clicker={this.handleclick}
          />
          <Square
            class="square 9"
            id="9"
            xturn={this.state.turn}
            clicker={this.handleclick}
          />
        </div>
      </div>
    );
  }
}

export default Board;
