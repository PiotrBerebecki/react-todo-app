import React, {Component} from 'react';
import uuidV4 from 'uuid/v4';

import {TodoForm, TodoList, Footer} from './components/todo/';
import {addTodo, findById, toggleTodo, updateTodos, removeTodo, filterTodos} from './lib/todoHelpers';
import {loadServerTodos, createServerTodo, updateServerTodo, destroyServerTodo} from './lib/todoService';
import {pipe} from './lib/utils';
import './App.css';

class App extends Component {
  static contextTypes = {
    route: React.PropTypes.string
  }

  state = {
    todos: [],
    currentTodo: '',
    errorMessage: '',
    tempMessage: ''
  }

  componentDidMount() {

    loadServerTodos()
      .then(todos => {
        this.setState({todos});
      });
  }

  handleInputChange = (e) => {
    this.setState({
      currentTodo: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {id: uuidV4(), name: this.state.currentTodo, isComplete: false};
    const updatedTodos = addTodo(this.state.todos, newTodo);

    this.setState({
      todos: updatedTodos,
      currentTodo: '',
      errorMessage: '',
    });

    createServerTodo(newTodo)
      .then(() => this.showTempMessage('Todo added'));
  }

  handleEmptySubmit = (e) => {
    e.preventDefault();
    this.setState({
      errorMessage: 'Please enter text'
    });
  }

  handleToggle = (id) => {
    const getTodoToToggle = pipe(findById, toggleTodo);
    const updatedTodo = getTodoToToggle(id, this.state.todos);
    const updatedTodos = updateTodos(this.state.todos, updatedTodo);

    this.setState({
      todos: updatedTodos
    });

    updateServerTodo(updatedTodo)
      .then(() => this.showTempMessage('Todo updated'));
  }

  handleRemove = (id, e) => {
    e.preventDefault();
    const updatedTodos = removeTodo(this.state.todos, id);
    this.setState({
      todos: updatedTodos
    });
    destroyServerTodo(id)
      .then(() => this.showTempMessage('Todo deleted'));
  }

  showTempMessage = (tempMessage) => {
    this.setState({tempMessage});
    setTimeout(() => this.setState({
      tempMessage: ''
    }), 2500);
  }

  render() {
    const submitHandler = this.state.currentTodo ? this.handleSubmit : this.handleEmptySubmit;
    const todosToDisplay = filterTodos(this.state.todos, this.context.route);
    return (
      <main>

        {this.state.errorMessage && <span className="error">{this.state.errorMessage}</span>}
        {this.state.tempMessage && <span className="message">{this.state.tempMessage}</span>}

        <TodoForm
          currentTodo={this.state.currentTodo}
          handleInputChange={this.handleInputChange}
          handleSubmit={submitHandler}
        />

        <TodoList
          todos={todosToDisplay}
          handleToggle={this.handleToggle}
          handleRemove={this.handleRemove}
        />

        <Footer />

      </main>
    );
  }
}

export default App;
