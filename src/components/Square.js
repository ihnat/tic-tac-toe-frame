import React from 'react';

const Square = props => {
    return (
        <button className="square" onClick={props.onClick}>
            {props.value === 1 ? 'X' : props.value === 0 ? 'O' : ''}
        </button>
    )
};

export default Square;
