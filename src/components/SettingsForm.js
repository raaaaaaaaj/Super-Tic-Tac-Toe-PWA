import React from 'react';

export default class SettingsForm extends React.Component {
    state = {
        boardSize: this.props.defaultValues.boardSize
    };

    handleChange = (event) => {
        const { target: { name, type, value, checked } } = event;
        this.setState({ [name]: type === 'checkbox' ? checked : value });
    }

    handleSubmit = (event) => {
        this.props.submitCallback(this.state.boardSize);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="submit" value="New game" />
                <label className="settings-label">
                    Board size <input
                        name="boardSize"
                        type="number"
                        min="2"
                        max="10"
                        value={this.state.boardSize}
                        onChange={this.handleChange} />
                </label>
            </form>
        );
    }
}