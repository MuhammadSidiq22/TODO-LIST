import React, { useState, useEffect, useRef } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { GrUpdate } from "react-icons/gr";

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      {props.edit ? (
        <>
          <input
            placeholder="Update your item"
            value={input}
            onChange={handleChange}
            name="text"
            ref={inputRef}
            className="todo-input edit"
          />
          <button onClick={handleSubmit} className="todo-button edit">
            <GrUpdate className="update-icon" /> Update
          </button>
        </>
      ) : (
        <div className="flex-form">
          <input
            placeholder="Nama aktivitas"
            value={input}
            onChange={handleChange}
            name="text"
            className="todo-input"
            ref={inputRef}
          />
          <button onClick={handleSubmit} className="todo-button">
            <AiOutlinePlusCircle className="plus-icon" /> Tambahkan
          </button>
        </div>
      )}
    </form>
  );
}

export default TodoForm;
