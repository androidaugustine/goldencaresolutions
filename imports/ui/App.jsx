import React, { Component } from 'react';

import Task from './Task.jsx';
import Output from './Output.jsx';
import Input from './Input.jsx';

// App component - represents the whole app
export default class App extends Component {
  getTasks() {
    return [
      { _id: 1, text: 'This is task 1 now do something' },
      { _id: 2, text: 'This is task 2 now do something else' },
      { _id: 3, text: 'This is task 3 forget it' },
    ];
  }

  renderTasks() {
    return this.getTasks().map((task) => (
      <Task key={task._id} task={task} />
    ));
  }

  renderInput(){
    return (<Input />);
  }

  renderOutput(){
    return (<Output />);
  }




  render() {
    return (
      <div className="container">
        <header>
          <h1>Basic Input Output React App</h1>
        </header>
        <div>{this.renderInput()}</div>
        <div>{this.renderOutput()}</div>


      </div>
    );
  }
}
