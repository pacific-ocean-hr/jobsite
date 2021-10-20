/* eslint-disable no-unused-vars */
/* eslint-disable operator-linebreak */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-expressions */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const axios = require('axios');

const Notes = ({ user }) => {
  const [textArea, setTextArea] = useState(false);
  const [edit, setEdit] = useState(false);
  const [notes, setNotes] = useState([]);

  const getNotes = () => {
    axios
      .get(`http://localhost:4007/notes/${user.id}`)
      .then((response) => {
        setNotes(response.data);
      })
      .catch((error) => {
        console.log('Error getting notes: ', error);
      });
  };

  const postNote = (title, body) => {
    const finishedNote = {
      title,
      body,
      user_id: user.id,
      created_at: Date.now(),
    };
    axios
      .post('http://localhost:4007/notes', finishedNote)
      .then(() => {
        setTextArea(false);
        getNotes();
      })
      .catch((error) => {
        console.log('Error in making a new note: ', error);
      });
  };

  const editNote = (noteId, newContent) => {
    axios
      .put(`http://localhost:4007/notes/${noteId}`, newContent)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log('Error in editing note: ', error);
      });
  };

  const removeNote = (noteId) => {
    axios
      .delete(`http://localhost:4007/notes/${noteId}`)
      .then(() => {
        getNotes();
      })
      .catch((error) => {
        console.log('Error in deleting note: ', error);
      });
  };

  const openTextArea = () => {
    setTextArea(!textArea);
  };

  const openEdit = () => {
    setEdit(!edit);
  };

  useEffect(() => {
    user !== null ? getNotes() : null;
  }, [user]);

  return (
    <div style={{ paddingLeft: '15%', paddingRight: '15%' }}>
      <div className="card" style={{ border: '1px solid #ACC196' }}>
        <button type="submit" className="mainButton" onClick={openTextArea}>
          {textArea ? 'Cancel' : 'Make a new note +'}{' '}
        </button>
        {textArea && (
          <form
            style={{
              marginTop: '15px',
              display: 'flex',
              flexDirection: 'column',
            }}
            onSubmit={(event) => {
              event.preventDefault();
              postNote(event.target.title.value, event.target.body.value);
            }}
          >
            <label>Title:</label>
            <input type="text" name="title" />
            <br />
            <label>Content: </label>
            <textarea style={{ marginBottom: '15px' }} name="body" />
            <button className="mainButton" type="submit">
              Create
            </button>
          </form>
        )}
      </div>
      {user !== null &&
        notes.length !== 0 &&
        notes.map((note) => (
          <div key={note._id} className="card">
            <h4>
              {note.title}
              <span
                style={{
                  paddingLeft: '10px',
                  color: '#799496',
                  fontSize: '12px',
                  fontStyle: 'italic',
                }}
              >
                {moment(note.created_at).fromNow()}
              </span>
              <button
                type="button"
                onClick={openEdit}
                className="mainButton"
                style={{ backgroundColor: '#799496', width: 50, height: 40 }}
              >
                ✏️
              </button>
            </h4>
            <span>{note.body}</span>
            <button
              type="button"
              onClick={() => removeNote(note._id)}
              className="mainButton"
              style={{ width: 50, height: 40, justifySelf: 'right' }}
            >
              X
            </button>
          </div>
        ))}
    </div>
  );
};
Notes.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
  }),
}.required;

export default Notes;
