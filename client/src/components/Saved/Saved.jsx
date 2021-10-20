/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';

const axios = require('axios');

const Saved = ({ user }) => {
  const [saved, setSaved] = useState([]);

  const getSaved = () => {
    axios
      .get(`http://localhost:4008/saved/${user.id}`)
      .then((response) => {
        setSaved(response.data);
      })
      .catch((error) => {
        console.log('Error getting saved items: ', error);
      });
  };

  const removeSaved = (savedId) => {
    console.log(savedId);
    // axios
    //   .delete(`http://localhost:4008/saved/${savedId}`)
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch((error) => {
    //     console.log('Error deleting saved item: ', error);
    //   });
  };

  useEffect(() => {
    user !== null ? getSaved() : null;
  }, [user]);

  return (
    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', columnGap: '20px' }}>
      <div className="bigCard">
      {user !== null &&
      <div className="card" style={{ backgroundColor: '#E9EB9E', color: 'white' }}>
          <h3>Interested</h3>
          {saved.filter((item) => item.level === 'interested').map((savedItem) => {
            return <div key={savedItem._id} className="card">{item}
              <button type="button" onClick={() => removeSaved(savedItem._id)} className="mainButton">X</button>
            </div>
          })}
        </div>}
      </div>
      <div className="bigCard">
      {user !== null &&
      <div className="card" style={{ backgroundColor: '#ACC196', color: 'white' }}>
          <h3>{user.role === 'seeker' ? 'Applied' : 'Very Interested'}</h3>
          {saved.filter((item) => item.level === 'applied').map((item) => <div className="card">{item}</div>)}
        </div>}
      </div>
      <div className="bigCard">
      {user !== null &&
      <div className="card" style={{ backgroundColor: '#799496', color: 'white' }}>
          <h3>{user.role === 'seeker' ? 'Interviewed' : 'Extremely Interested'}</h3>
          {saved.filter((item) => item.level === 'interviewed').map((item) => <div className="card">{item}</div>)}
        </div>}
      </div>
    </div>
  );
};

export default Saved;
