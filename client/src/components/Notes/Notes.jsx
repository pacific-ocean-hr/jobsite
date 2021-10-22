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
  const [edit, setEdit] = useState(''); // id
  const [notes, setNotes] = useState([]);
  const [newTitle, setNewTitle] = useState('');
  const [newBody, setNewBody] = useState('');

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
        setEdit(false);
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

  useEffect(() => {
    user !== null ? getNotes() : null;
  }, [user]);

  return (
    <div style={{
      padding: '5% 15% 5% 15%',
      marginTop: '40px',
      backgroundColor: '#f2f2f2',
      maxHeight: '600px',
    }}
    >
      <div className="card">
        <button type="submit" className="mainButton" style={{ backgroundColor: '#ACC196' }} onClick={openTextArea}>
          {textArea ? 'Cancel' : 'Make a new note +'}{' '}
        </button>
        {textArea && (
          <form
            style={{
              margin: '2%',
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
            <button className="mainButton" style={{ backgroundColor: '#ACC196' }} type="submit">
              Create
            </button>
          </form>
        )}
      </div>
      <div style={{
        display: 'flex',
        flexFlow: 'row wrap',
        justifyContent: 'center',
      }}
      >
        {user !== null &&
          notes.length !== 0 &&
          notes.map((note) => (
            <div key={note._id} className="card" style={{ border: '1px solid #49475B', maxWidth: '20%' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <button
                  type="button"
                  onClick={() => removeNote(note._id)}
                  className="mainButton"
                  style={{ width: 50, height: 40, justifySelf: 'left' }}
                >
                  x
                </button>
                <button
                  type="button"
                  onClick={edit === note._id ? () => editNote(note._id, { newTitle, newBody }) : () => setEdit(note._id)}
                  className="mainButton"
                  style={{
                    backgroundColor: '#799496',
                    width: `${edit === note._id ? '60px' : '50px'}`,
                    height: '40px',
                    justifySelf: 'right',
                  }}
                >
                  {edit === note._id ? 'Save' : '✏️'}
                </button>
              </div>
              <span
                contentEditable={edit === note._id ? 'true' : 'false'}
                onInput={(event) => {
                  setNewTitle(event.currentTarget.textContent);
                }}
                style={{ fontWeight: 'bold', paddingTop: '5px', paddingBottom: '5px' }}
              >
                {note.title}
              </span>
              <span
                contentEditable={edit === note._id ? 'true' : 'false'}
                onInput={(event) => {
                  setNewBody(event.currentTarget.textContent);
                }}
                style={{ border: `${edit === note._id ? '1px solid gray' : 'none'}`, borderRadius: '4px' }}
              >{note.body}
              </span>
              <span
                contentEditable="false"
                style={{
                  paddingLeft: '10px',
                  color: '#799496',
                  fontSize: '12px',
                  fontStyle: 'italic',
                  justifySelf: 'flex-end',
                }}
              >
                {moment(note.created_at).fromNow()}
              </span>
            </div>
          ))}
      </div>
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
