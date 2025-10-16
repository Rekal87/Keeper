import { useState } from "react";

function Note() {
  const [note, setNote] = useState();

  const handleClick = () => {
    setNote("Note saved!");
  };
  return (
    <div>
      <h2>Note Title</h2>
      <p>This is the content of the note.</p>

      <div>
        <p>{note}</p>
        <button onClick={handleClick}>Save</button>
      </div>
    </div>
  );
}

export default Note;
