import React, { useContext } from 'react'
import noteContext from '../../context/notes/noteContext'

export default function NoteItem(prors) {
  const context = useContext(noteContext);
  const { deleteNote, getIdByNote, } = context;
  return (
    <>
      <div className="card my-2">
        <div className="card-body">
          <h5 className="card-title">{prors.title}</h5>
          <p className="card-text mb-1">{prors.desc}</p>
          <small>Create Date : {prors.createDate}</small>
          <br />
          <small>Update Date : {prors.updateDate}</small>
          <div className='mt-2'>
            <button className='btn btn-danger btn-sm mx-1 ' onClick={() => deleteNote(prors.id)}>Delete</button>
            <button className='btn btn-success btn-sm mx-1' onClick={() => getIdByNote(prors.id)}>Edit</button>
          </div>
        </div>
      </div>
    </>
  )
}
