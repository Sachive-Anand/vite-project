// TodoForm.js
import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [newItem, setNewItem] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo({
      name: newItem,
      description: description,
      dueDate: dueDate,
    });
    setNewItem("");
    setDescription("");
    setDueDate("");
  };

  return (
    <form onSubmit={handleSubmit} className="new_item_form">
      <div className="form-row">
        <label htmlFor="new_item_name">Task Title</label>
        <input
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          type="text"
          id="new_item_name"
          name="new_item_name"
        />
      </div>
      <div className="form-row">
        <label htmlFor="new_item_description">Task Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          id="new_item_description"
          name="new_item_description"
        />
      </div>
      <div className="form-row">
        <label htmlFor="new_item_due_date">Due Date</label>
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          id="new_item_due_date"
          name="new_item_due_date"
          min={new Date().toISOString().split("T")[0]}
        />
      </div>
      <div className="form-row">
        <button type="submit" className="btn">
          Add Item
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
