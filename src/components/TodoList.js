import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, removeHandler, updateTodo, editHandler }) => (
    <div>
      {todos.map((t, i) => (
        <TodoItem key={i} todo={t} removeHandler={removeHandler} updateTodo={updateTodo} editHandler={editHandler} />
      ))}
    </div>
  );

export default TodoList;
