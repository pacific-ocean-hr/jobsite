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

  // eslint-disable-next-line camelcase
  const removeSaved = (id) => {
    axios
      .delete(`http://localhost:4008/saved/${id}`)
      .then(() => getSaved())
      .catch((error) => {
        console.log('Error deleting saved item: ', error);
      });
  };

  useEffect(() => {
    user?getSaved():null;
  }, [user]);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        columnGap: '20px',
      }}
    >
      <div className="bigCard">
        {user !== null && (
          <div
            className="card"
            style={{ backgroundColor: '#E9EB9E', color: 'white' }}
          >
            <h3>Interested</h3>
            {saved
              .filter((item) => item.level === 'interested')
              .map((savedItem) => (
                // eslint-disable-next-line no-underscore-dangle
                <div key={savedItem._id} className="card" style={{ backgroundColor: 'white', color: 'black' }}>
                  <div>
                    {'Company: '}
                    {savedItem.item[0].company_name}
                  </div>
                  <div>
                    {'Title: '}
                    {savedItem.item[0].title}
                  </div>
                  <div>
                    {'Type: '}
                    {savedItem.item[0].job_type}
                  </div>
                  <div>
                    {'Salary: '}
                    {savedItem.item[0].salary ? savedItem.item[0].salary : 'unknown'}
                  </div>
                  <a href={savedItem.item[0].url}>More Details</a>
                  <button
                    type="button"
                    onClick={() => removeSaved(savedItem.job_id)}
                    className="mainButton"
                  >
                    X
                  </button>
                </div>
              ))}
          </div>
        )}
      </div>
      <div className="bigCard">
        {user !== null && (
          <div
            className="card"
            style={{ backgroundColor: '#ACC196', color: 'white' }}
          >
            <h3>{user.role === 'seeker' ? 'Applied' : 'Very Interested'}</h3>
            {saved
              .filter((item) => item.level === 'applied')
              .map((item) => (
                <div className="card">{item}</div>
              ))}
          </div>
        )}
      </div>
      <div className="bigCard">
        {user !== null && (
          <div
            className="card"
            style={{ backgroundColor: '#799496', color: 'white' }}
          >
            <h3>
              {user.role === 'seeker' ? 'Interviewed' : 'Extremely Interested'}
            </h3>
            {saved
              .filter((item) => item.level === 'interviewed')
              .map((item) => (
                <div className="card">{item}</div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Saved;
