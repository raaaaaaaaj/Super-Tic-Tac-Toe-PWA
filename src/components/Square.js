import React from 'react';

export default function Square({ value, winner, clickable, onClick }) {
    const style = {
        color: value ? (value === 'X' ? '#fc7341' : '#2db2e2') : undefined,
        background: winner 
            ? (winner === 'X' ? '#ffccb5' : '#dbf5ff') 
            : (clickable ? '#e2ffec' : undefined)
    };

    return (
        <button className="square" style={style} onClick={onClick}>
            {value}
        </button>
    );
}