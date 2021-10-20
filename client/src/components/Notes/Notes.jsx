/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import moment from 'moment';

const axios = require('axios');

const Notes = ({ user }) => {
  const [textArea, setTextArea] = useState(false);
  const [edit, setEdit] = useState(false);
  const [notes, setNotes] = useState([]);

  const getNotes = () => {
    axios
      .get(`http://localhost:4007/notes/${user}`)
      .then((response) => {
        setNotes(response.data);
      })
      .catch((error) => {
        console.log('Error getting notes: ', error);
      });
  };

  const postNote = (title, body) => {
    const finishedNote = {
      title, body, user_id: user.id, created_at: Date.now(),
    };
    axios
      .post('http://localhost:4007/notes', finishedNote)
      .then((response) => {
        setTextArea(false);
      })
      .catch((error) => {
        console.log('Error in making a new note: ', error);
      });
  };

  const editNote = (noteId, newContent) => {
    axios
      .put(`http://localhost:4007/notes${noteId}`, newContent)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log('Error in making a new note: ', error);
      });
  };

  const removeNote = (noteId) => {
    console.log(noteId)
    // axios
    //   .delete(`http://localhost:4007/notes${noteId}`)
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch((error) => {
    //     console.log('Error in making a new note: ', error);
    //   });
  };

  const openTextArea = () => {
    setTextArea(!textArea);
  };

  const openEdit = () => {
    setEdit(!edit);
  };

  useEffect(() => {
    getNotes();
  }, []);

  return (
    <div style={{ paddingLeft: '15%', paddingRight: '15%' }}>
      <div className='card'>
        <button className='mainButton' onClick={openTextArea}>{textArea ? 'Cancel' : 'Make a new note +'} </button>
        {textArea &&
          <form style={{ marginTop: '15px', display: 'flex', flexDirection: 'column' }} onSubmit={(event) => { event.preventDefault(); postNote(event.target.title.value, event.target.body.value) }}>
            <label>Title:</label>
            <input type="text" name='title' /><br />
            <label>Content: </label>
            <textarea style={{ marginBottom: '15px' }} name='body' />
            <button className='mainButton' type='submit'>Create</button>
          </form>}
      </div>
      {notes.length !== 0 && notes.map((note) => (
        <div key={note._id} className='card'>
          <h4>{note.title}<span style={{ paddingLeft: '10px', color: '#799496', fontSize: '12px', fontStyle: 'italic' }}>{moment(note.created_at).fromNow()}</span>
            <button onSubmit={openEdit} className='mainButton' style={{ backgroundColor: '#799496', width: 50, height: 40 }}>✏️
            </button></h4>
          <span>{note.body}</span>
          <button onClick={(event) => { event.preventDefault(); removeNote(event.target.note._id) }} className='mainButton' style={{ width: 50, height: 40, justifySelf: 'right' }}>X</button>
        </div>))}
    </div>
  );
};

export default Notes;
