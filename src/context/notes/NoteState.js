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
          "_id": "65607d264a455d930dab0015",
          "user": "655df1088c43e61cedfa897e",
          "title": "My title 12",
          "description": "Wake up early morning 12",
          "tag": "Personal 12",
          "date": "2023-11-24T10:38:30.771Z",
          "__v": 0
        }
    ]
    const [notes, setNotes] = useState(notesInitial)
  
  return (
      <NoteContext.Provider value={{notes, setNotes}}>
          {props.children}
      </NoteContext.Provider>
  );
};

export default NoteState;
