import React, { useContext } from 'react'
import noteContext from '../../context/notes/noteContext';

export default function AddNote() {
    const context = useContext(noteContext);
    const { addAndEditNote, updateNote, setUpdateNote } = context;

    const setData = (e) => {
        e.preventDefault();
        addAndEditNote();
    }

    const setNoteDate = (e) => {
        setUpdateNote({ ...updateNote, [e.target.name]: e.target.value });
    }

    return (
        <>
            <h2>Add Note</h2>
            <form onSubmit={setData} name='noteForm'>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" id="title" name='title' value={updateNote.title} onChange={setNoteDate} />
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Description</label>
                    <input type="text" className="form-control" id="desc" name='desc' value={updateNote.desc} onChange={setNoteDate} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
    )
}
