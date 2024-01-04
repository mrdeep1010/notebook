import React from 'react'
import AddNote from './AddNote'
import NoteList from './NoteList'

export default function Note() {
    return (<>
        <div className="container">
            <AddNote />
            <NoteList/>
        </div>
    </>
    )
}
