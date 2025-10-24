import { useState } from "react";
import Header from "./Header";

function Note() {
  // saves our tasks
  const [keep, setKeep] = useState([
    "Eat breakfast",
    "Buy Milk",
    "Walk the dogs",
  ]);

  // new tasks thats being added
  const [newKeep, setNewKeep] = useState("");

  // fuction for the textbox when adding tasks
  const handleInputChangr = (event) => {
    setNewKeep(event.target.value);
  };

  // add tasks
  const addKeep = () => {};

  // delete tasks
  const deleteKeep = (index) => {};

  const moveKeepUp = (index) => {};

  const moveKeepDown = (index) => {};

  return (
    <div className="to-do-list">
      <Header />
      <div className="input-group mb-3">
        <input
          type="text"
          placeholder="Enter a task"
          value={newKeep}
          onChange={handleInputChangr}
        />
        <button
          className="btn btn-outline-secondary"
          type="button"
          id="button-addTask"
          onClick={addKeep}
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default Note;
