import React from "react";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

function CreateArea(props) {
  let [newNote, setNote] = useState({
    title: "",
    content: "",
  });

  const [selected, setSelected] = useState(false);

  const updateSelected = (set) => {
    setSelected(set);
  };

  const updateNote = (event) => {
    let newValue = event.target.value;
    let name = event.target.name;

    console.log("newValue: " + newValue + "; name: " + name);

    setNote((prev) => {
      return {
        ...prev,
        [name]: newValue,
      };
    });
  };

  return (
    <div>
      <form className="create-note">
        {selected ? (
          <input
            onChange={updateNote}
            name="title"
            placeholder="Title"
            value={newNote.title}
          />
        ) : null}
        <textarea
          onChange={updateNote}
          onFocus={() => {
            updateSelected(true);
          }}
          name="content"
          placeholder="Take a note..."
          rows={selected ? "3" : "1"}
          value={newNote.content}
        />
        <Zoom in={selected ? true : false}>
          <Fab
            color="primary"
            aria-label="add"
            onClick={(event) => {
              event.preventDefault();
              props.addNote(newNote);
              setNote({
                title: "",
                content: "",
              });
              setSelected(false);
            }}
          >
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
