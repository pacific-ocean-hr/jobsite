/* eslint-disable no-unused-expressions */
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
    <div
      style={{
        marginTop: '40px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        columnGap: '20px',
        flex: '1 0 50%',
        backgroundColor: '#f2f2f2',
      }}
    >
      <div className="bigCard" style={{ margin: '5% 0 5% 0' }}>
        {user !== null && (
          <div
            className="card"
            style={{ backgroundColor: '#ACC196', color: 'white', padding: '10px 20px 10px 20px', border: '1px solid #49475B' }}
          >
            <h3>Interested</h3>
            {saved
              .filter((item) => item.level === 'interested')
              .map((savedItem) => {
                return (
                  <div key={savedItem._id} className="card">
                    {item}
                    <button
                      type="button"
                      onClick={() => removeSaved(savedItem._id)}
                      className="mainButton"
                    >
                      X
                    </button>
                  </div>
                );
              })}
          </div>
        )}
      </div>
      <div className="bigCard" style={{ margin: '5% 0 5% 0' }}>
        {user !== null && (
          <div
            className="card"
            style={{ backgroundColor: '#799496', color: 'white', padding: '10px 20px 10px 20px', border: '1px solid #49475B' }}
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
      <div className="bigCard" style={{ margin: '5% 0 5% 0' }}>
        {user !== null && (
          <div
            className="card"
            style={{ backgroundColor: '#49475B', color: 'white', padding: '10px 20px 10px 20px', border: '1px solid #49475B' }}
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
