import React from 'react';
import Square from './Square.js';
import generateGridNxN from '../utils/GenerateSq.js';

export default class Board extends React.Component {
    renderSquare = (i) => {
        const { squares, winner, clickable, onClick } = this.props;
        return (
            <Square key={i}
                value={squares[i]}
                winner={winner}
                clickable={clickable}
                onClick={() => onClick(i)}
            />
        );
    }

    render() {
        const { size } = this.props;
        return generateGridNxN(
            'board',
            size,
            this.renderSquare
        );
    }
}