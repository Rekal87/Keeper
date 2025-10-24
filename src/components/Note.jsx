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
  const addKeep = () => {
    if (newKeep.trim() !== "") {
      setKeep((keep) => [...keep, newKeep]);
      setNewKeep("");
    }
    return;
  };

  // delete tasks
  const deleteKeep = (index) => {
    keep.filter((index) => index === index);
  };

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
          className="btn btn-success"
          type="button"
          id="button-addTask"
          onClick={addKeep}
        >
          Add
        </button>
      </div>

      <div>
        <ol className="list-group">
          {keep.map((keep, index) => (
            <>
              <li className="list-group-item" key={index}>
                {keep}
                <span
                  type="button"
                  className="btn btn-danger delete-button"
                  onClick={() => deleteKeep(index)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-trash3-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5" />
                  </svg>
                </span>
                <span
                  type="button"
                  className="btn btn-warning"
                  onClick={() => moveKeepUp(index)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-arrow-up-short"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5"
                    />
                  </svg>
                </span>
                <span
                  type="button"
                  className="btn btn-warning"
                  onClick={() => moveKeepDown(index)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-arrow-down-short"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4"
                    />
                  </svg>
                </span>
              </li>
            </>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default Note;
