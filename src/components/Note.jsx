import { useState } from "react";

function Note() {
  const [note, setNote] = useState();
  const [newDate, setNewDate] = useState();

  const handleClick = () => {
    setNote("Note saved!");
  };

  const handleDateChange = () => {
    const now = new Date();
    setNewDate(now);
  };
  return (
    <div>
      <h2>Note Title</h2>
      <p>This is the content of the note.</p>

      <div>
        <p>{note}</p>
        <button onClick={handleClick}>Save</button>

        <h4>Date:</h4>
        <p>{newDate}</p>
        <button onClick={handleDateChange}>Get Current Date</button>
      </div>
    </div>
  );
}

export default Note;
