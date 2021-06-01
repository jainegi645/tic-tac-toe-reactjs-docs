import React from 'react';
import Square from './Square';

class Board extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      //creates an array with 9 values, all null
      squares: Array(9).fill(null),
    
     
      
    };
  }


  handleClick(i){

    //creates a copy of  existing array
    const squares = this.state.squares.slice();
    
    //assign value to position 'i' in squares array
    squares[i] = 'x';

    //sets the states by assigning squares(copy of array) to `squares(board's state)` 
    this.setState({squares: squares});
  }
  

    renderSquare(i) {
      return (
        //renders the square component with value(i) which is argument from `this.renderSquare(0)` below, 
        <Square
        //shows empty squares becuse value of squares[i] is all null(see state of board)
          value={this.state.squares[i]}
          onClick={() => this.handleClick(i)}
        />
      );
    }
  

    render() {
      const status = 'Next player: X';
  
      return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }
export default Board;
