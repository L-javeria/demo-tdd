import React from 'react';
import styles from './TodoItem.module.css';

const TodoItem = ({ todo, removeHandler, updateTodo, editHandler }) => {
    
  return(
    <div className={styles.itemContainer}>
      <div>
        <input
          type="checkbox"
          name={`checkbox-${todo.id}`}
          checked={todo.completed}
          data-testid={`checkbox-${todo.id}`}
          onChange={() => updateTodo(todo.id)}
        />
        <label
          htmlFor={`checkbox-${todo.id}`}
          onClick={() => updateTodo(todo.id)}
          className={todo.completed ? styles.completed : ''}
        >
          {todo.title}
        </label>
        <date 
          onClick={() => updateTodo(todo.id)}
          htmlFor={`checkbox-${todo.id}`}
          className={todo.completed ? styles.completed : ''}
        > {todo.date} </date>
      </div>
      <button
        className={styles.closeBtn}
        data-testid={`close-btn-${todo.id}`}
        onClick={() => removeHandler(todo.id)}
      >
        X
      </button>
      <button
        className={styles.editBtn}
        data-testid={`edit-btn-${todo.id}`}
        onClick={() => editHandler(todo)}
      >
        Edit
        </button>
        
    </div>
) }
  
export default TodoItem;
