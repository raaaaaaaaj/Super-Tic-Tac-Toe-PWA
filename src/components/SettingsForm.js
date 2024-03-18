import React from 'react';

export default class SettingsForm extends React.Component {
    handleSubmit = (event) => {
        this.props.submitCallback(3); // board size is always 3
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="submit" value="New game" />
            </form>
        );
    }
}