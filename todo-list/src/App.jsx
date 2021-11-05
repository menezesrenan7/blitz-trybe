import React, { Component } from 'react';
import AddTask from './components/AddTask';
import Task from './components/Task';

class App extends Component {
  constructor() {
    super();

    this.state = {
      taskList: [],
    };

    this.getTaskListFromLocalStorage = this.getTaskListFromLocalStorage.bind(this);
    this.createTask = this.createTask.bind(this);
    this.removeTask = this.removeTask.bind(this);
    // this.finishTask = this.finishTask.bind(this);
  }

  componentDidMount() {
    this.getTaskListFromLocalStorage();
  }

  getTaskListFromLocalStorage() {
    let localStorageTaskList = localStorage.getItem('taskList');
    if (localStorageTaskList) {
      localStorageTaskList = JSON.parse(localStorageTaskList);
      this.setState({
        taskList: localStorageTaskList,
      });
    }
  }

  createTask(newTask) {
    const { taskList } = this.state;
    const updatedTaskList = [...taskList, newTask];
    this.setState({
      taskList: updatedTaskList,
    });
    localStorage.setItem('taskList', JSON.stringify(updatedTaskList));
  }

  removeTask(id) {
    const { taskList } = this.state;
    const newTaskList = taskList.filter((task) => task.id !== id);
    this.setState({
      taskList: newTaskList,
    });
    localStorage.setItem('taskList', JSON.stringify(newTaskList));
  }

  // finishTask(updatedTask) {
  //   const { taskList } = this.state;
  //   console.log(taskList);
  //   const filteredTasksList = taskList.filter((task) => task.id !== updatedTask.id);
  //   const newTaskList = filteredTasksList.push(updatedTask);
  //   this.setState({
  //     taskList: newTaskList,
  //   });
  // }

  render() {
    const { taskList } = this.state;
    return (
      <>
        <AddTask onCreate={this.createTask} />
        { taskList.map(({ id, task }) => (
          <Task
            key={id}
            task={task}
            onRemove={() => this.removeTask(id)}
            onFinish={this.finishTask}
          />
        )) }
      </>
    );
  }
}

export default App;
