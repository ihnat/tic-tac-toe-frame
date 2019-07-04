import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Square from './Square';

const BoardRow = ({num, data, onClick}) => (
    <div className="board-row">
        {data.map((value, colNum) => {
            let squareNum = num * 3 + colNum;
            return (
                <Square
                key={colNum}
                value={value}
                onClick={() => onClick(squareNum)}/>
            )
        })}
    </div>
)


class Board extends Component {
    static propTypes = {
        onClick: PropTypes.func.isRequired,
    };

    renderBoard = () => {
        return this.props.squares.map((rowData,rowNum) => (
            <BoardRow key={rowNum} 
            num={rowNum} 
            data={rowData} 
            onClick={this.props.onClick}/>
        ))
    };

    render() {
        return <div class="board">
            {this.renderBoard()}
        </div>
    }
}

export default Board;