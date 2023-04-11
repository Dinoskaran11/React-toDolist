import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");

  function handleChange(event) {
    setName(event.target.value);
  }

  const [newText, setNewText] = useState([]);

  function eventClick() {
    setNewText((preVal) => {
      return [...preVal, name];
    });

    setName("");
  }

  //const listArr = []

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input value={name} onChange={handleChange} type="text" />
        <button onClick={eventClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {newText.map((Text) => {
            return <li>{Text}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
