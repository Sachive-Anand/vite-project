// TodoItem.js
import React from "react";

const TodoItem = ({ todo, toggleComplete, deleteTodo }) => {
  return (
    <li className={`item ${todo.completed ? "completed" : ""}`}>
      <div className="item-wrapper">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleComplete(todo.id)}
        />
        <div className="item-content">
          <div className="item-title">
            <h2 className="item_name">{todo.name}</h2>
            <p className="item_due_date">{todo.dueDate}</p>
          </div>
          <p className="item_description">{todo.description}</p>
        </div>
      </div>
      <div className="actions">
        <button
          className="btn delete-btn"
          onClick={() => deleteTodo(todo.id)}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
