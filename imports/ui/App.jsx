import React, { Component } from 'react';

import Task from './Task.jsx';

// App component - represents the whole app
export default class App extends Component {
    getTasks() {
        return [
            { _id: 1, text: 'This is task A' },
            { _id: 2, text: 'This is task B' },
            { _id: 3, text: 'This is task C' },
        ];
    }

    renderTasks() {
        return this.getTasks().map((task) => (
            <Task key={task._id} task={task} />
        ));
    }

    render() {
        return (
            <div className="container">
                <header>
                    <h1>Todo List</h1>
                </header>

                <ul>
                    {this.renderTasks()}
                </ul>
            </div>
        );
    }
}