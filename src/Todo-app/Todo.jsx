import React from "react";
import "./todo.css";

const Todo = (props) => {
  const { title, desc } = props.todo;
  const { id } = props;

  const handleClick = (id) => {
    props.onRemoveTodo(id);
  };

  return (
    <article className="todo">
      <div>
        <h2>Id: {id}</h2>
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
      <div>
        <button
          className="btn"
          onClick={() => {
            handleClick(id);
          }}
        >
          <i className="fas fa-trash fa-2x"></i>
        </button>
      </div>
    </article>
  );
};

export default Todo;
