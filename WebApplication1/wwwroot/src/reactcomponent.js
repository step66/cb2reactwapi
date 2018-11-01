import * as React from 'react';
import * as ReactDOM from 'react-dom';

export default class Counter extends React.Component {

    constructor() {
        super();
        this.state = { currentCount: 0 };
    }

    render() {
        return <div>
            <h1> counter </h1>
            <p>This is a counter</p>
            <p>Current Count <strong>{this.state.currentCount}</strong></p>

            <button onClick={() => { this.incrementCounter() }}>Increment </button>
        </div>;
    }

    incrementCounter() {
        this.setState({
            currentCount: this.state.currentCount + 1
        });
    }
}