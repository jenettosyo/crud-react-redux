import React, { useState } from "react";

//components

const Form = () => {
  const [todo, setTodo] = useState("");

  const Uncreable = todo === "";

  return (
    <div>
      <form className="form-container">
        <input
          type="text"
          className="input-field"
          placeholder="Your todo"
          value={todo}
          name="todo"
        />
        <button className="add-btn" disabled={Uncreable}>
          ADD
        </button>
      </form>
      <div className="todo-container"></div>
    </div>
  );
};

export default Form;
