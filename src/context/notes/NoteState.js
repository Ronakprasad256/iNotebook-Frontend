import { useState } from 'react';
import NoteContext from './noteContext';

const NoteState = (props) => {
    const notesInitial = [
        {
          "_id": "655f2c4f91e96d2f4dc47d78",
          "user": "655df1088c43e61cedfa897e",
          "title": "My title",
          "description": "Wake up early morning",
          "tag": "Personal",
          "date": "2023-11-23T10:41:19.213Z",
          "__v": 0
        },
        {
          "_id": "65607d264a455d9830dab0015",
          "user": "655df1088c43e61cedfa897e",
          "title": "My title 12",
          "description": "Wake up early morning 12",
          "tag": "Personal 12",
          "date": "2023-11-24T10:38:30.771Z",
          "__v": 0
        },
        {
          "_id": "65607d264a455d9730dab0015",
          "user": "655df1088c43e61cedfa897e",
          "title": "My title 12",
          "description": "Wake up early morning 12",
          "tag": "Personal 12",
          "date": "2023-11-24T10:38:30.771Z",
          "__v": 0
        },
        {
          "_id": "65607d264a455d9630dab0015",
          "user": "655df1088c43e61cedfa897e",
          "title": "My title 12",
          "description": "Wake up early morning 12",
          "tag": "Personal 12",
          "date": "2023-11-24T10:38:30.771Z",
          "__v": 0
        },
        {
          "_id": "65607d264a455d9530dab0015",
          "user": "655df1088c43e61cedfa897e",
          "title": "My title 12",
          "description": "Wake up early morning 12",
          "tag": "Personal 12",
          "date": "2023-11-24T10:38:30.771Z",
          "__v": 0
        },
        {
          "_id": "65607d264a455d9430dab0015",
          "user": "655df1088c43e61cedfa897e",
          "title": "My title 12",
          "description": "Wake up early morning 12",
          "tag": "Personal 12",
          "date": "2023-11-24T10:38:30.771Z",
          "__v": 0
        },
        {
          "_id": "65607d264a455d9330dab0015",
          "user": "655df1088c43e61cedfa897e",
          "title": "My title 12",
          "description": "Wake up early morning 12",
          "tag": "Personal 12",
          "date": "2023-11-24T10:38:30.771Z",
          "__v": 0
        },
        {
          "_id": "65607d264a455d9230dab0015",
          "user": "655df1088c43e61cedfa897e",
          "title": "My title 12",
          "description": "Wake up early morning 12",
          "tag": "Personal 12",
          "date": "2023-11-24T10:38:30.771Z",
          "__v": 0
        },
        {
          "_id": "65607d264a455d9130dab0015",
          "user": "655df1088c43e61cedfa897e",
          "title": "My title 12",
          "description": "Wake up early morning 12",
          "tag": "Personal 12",
          "date": "2023-11-24T10:38:30.771Z",
          "__v": 0
        }
    ]
    const [notes, setNotes] = useState(notesInitial)
  
  
  //Add a Note
  const addNote = (title, description, tag) => {
    //TODO: API CALL
    console.log("Adding a new Note")
      const note = {
        "_id": "65607d264a455d91530dab0015",
        "user": "655df1088c43e61cedfa897e",
        "title": title,
        "description": description,
        "tag": tag,
        "date": "2023-11-24T10:38:30.771Z",
        "__v": 0
      }
      setNotes(notes.concat(note))
    }
  //Delete a Note
  const deleteNote = (id) => {
    console.log("Deleting the note with id" + id);
    const newNotes = notes.filter((note) => {return note._id !== id})
    setNotes(newNotes)
  }
  //Edit a Note
  const editNote = (id, title, description, tag) => {
  }

  return (
      <NoteContext.Provider value={{notes, addNote, deleteNote, editNote}}>
          {props.children}
      </NoteContext.Provider>
  );
};

export default NoteState;
