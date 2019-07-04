import React, {Component} from 'react';
import Board from './Board';
const DAMMY_DATA = [
    [1,0,1],
    [undefined, 0, undefined],
    [undefined, undefined, undefined],
 ]

class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: DAMMY_DATA 
        }
    }

    handleClick(i) {
        console.log('clicked ', i);
    }

    render() {
        const {squares} = this.state;
        return (
            <div className="game">
                <Board
                    squares={this.state.squares}
                    onClick={i => this.handleClick(i)}/>
            </div>
        );
    }
}

export default Game;