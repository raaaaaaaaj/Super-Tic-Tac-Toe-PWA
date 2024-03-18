import React from 'react';
import SettingsForm from './components/SettingsForm.js';
import Game from './components/Game.js';

export default class App extends React.Component {
    state = {
        boardSize: 3,
        matchID: 0
    };

    newGame = (size) => {
        this.setState((prevState) => ({
            boardSize: size,
            matchID: prevState.matchID + 1
        }));
    }

    render() {
        return (
            <div className="app">
                <SettingsForm defaultValues={this.state} submitCallback={this.newGame} /><br/>
                <Game key={this.state.matchID}
                    size={this.state.boardSize}
                    renderInfo={true} />
            </div>
        );
    }
}