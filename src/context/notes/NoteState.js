import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
    const noteObj = {
        id: 0,
        title: "",
        desc: ""
    }

    const [note, setNote] = useState([]);
    const [updateNote, setUpdateNote] = useState(noteObj);

    const addAndEditNote = () => {
        (updateNote.id === 0) ? addNote() : editNote();
    }

    const addNote = () => {
        let newNote = {
            id: note.length + 1,
            title: updateNote.title,
            desc: updateNote.desc,
            createDate: new Date().toLocaleDateString(),
            updateDate: new Date().toLocaleDateString()
        }
        setNote(note.concat(newNote));
        setUpdateNote(noteObj);
    }


    const editNote = () => {
        const newNote = JSON.parse(JSON.stringify(note));
        for (let i = 0; i < newNote.length; i++) {
            if (newNote[i].id === updateNote.id) {
                newNote[i].title = updateNote.title;
                newNote[i].desc = updateNote.desc;
                newNote[i].updateDate = new Date().toLocaleDateString();
                break;
            }
        }
        setNote(newNote);
        setUpdateNote(noteObj);
    }

    const deleteNote = (id) => {
        const newNote = note.filter((e) => { return e.id !== id });
        setNote(newNote);
    }

    const getIdByNote = (id) => {
        let getIdByNote = note.find(e => e.id === id);
        setUpdateNote({ id: getIdByNote.id, title: getIdByNote.title, desc: getIdByNote.desc });
    }

    return (
        <NoteContext.Provider value={{ note, noteObj, updateNote, setUpdateNote, addAndEditNote, deleteNote, getIdByNote }}>
            {props.children};
        </NoteContext.Provider>
    )
}

export default NoteState;