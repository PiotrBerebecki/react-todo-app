import React from 'react';
import classNames from 'classnames';

import {partial} from './../../lib/utils';
import './TodoItem.css';


export const TodoItem = (props) => {
  const handleToggle = partial(props.handleToggle, props.id);
  const handleRemove = partial(props.handleRemove, props.id);

  return (
    <li className="item">
      <a
        href="#"
        className="item__delete"
        onClick={handleRemove}
      >
        X
      </a>
      <input
        type="checkbox"
        className="item__checkbox"
        checked={props.isComplete}
        onChange={handleToggle}
      />
      <span className={classNames('item__text', {'item__text--selected':props.isComplete})}>{props.name}</span>
    </li>
  );
};

TodoItem.propTypes = {
  id: React.PropTypes.string.isRequired,
  isComplete: React.PropTypes.bool.isRequired,
  handleToggle: React.PropTypes.func.isRequired,
  handleRemove: React.PropTypes.func.isRequired,
  name: React.PropTypes.string.isRequired
};
