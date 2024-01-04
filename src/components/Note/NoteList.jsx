import React, { useContext } from 'react';
import noteContext from '../../context/notes/noteContext';
import NoteItem from './NoteItem';

export default function NoteList() {
    const context = useContext(noteContext);
    const { note } = context;
    return (
        <>
            <div className="my-2">
                <h2>Notes</h2>
                <div className="row">
                    {note.map((note) => {
                        return <div className="col-md-3">
                            <NoteItem key={note.id} id={note.id} title={note.title} desc={note.desc} createDate={note.createDate} updateDate={note.updateDate} />
                        </div>
                    })}
                </div>

            </div>
        </>
    )
}
