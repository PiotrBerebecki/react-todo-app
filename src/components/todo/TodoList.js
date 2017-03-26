import React from 'react';
import uuidV4 from 'uuid/v4';

import {TodoItem} from './TodoItem';
import './TodoList.css';


export const TodoList = (props) => {
  const renderTodos = props.todos.map(todo => {
    return (
      <TodoItem
        key={uuidV4()}
        {...todo}
        handleToggle={props.handleToggle}
        handleRemove={props.handleRemove}
      />
    );
  });

  return (
    <ul className="todo__list">
      {renderTodos}
    </ul>
  );
};

TodoList.propTypes = {
  todos: React.PropTypes.array.isRequired,
  handleToggle: React.PropTypes.func.isRequired,
  handleRemove: React.PropTypes.func.isRequired,
};
