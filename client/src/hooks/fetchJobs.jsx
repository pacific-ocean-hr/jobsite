import axios from 'axios';
import { useReducer, useEffect, useState } from 'react';
import jwt from 'jwt-decode';

const ACTIONS = {
  MAKE_REQUEST: 'make_request',
  GET_DATA: 'get-data',
  ERROR: 'error',
};

let hasData = true;

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.MAKE_REQUEST:
      return {
        loading: true,
        isLoaded: false,
        jobs: [],
        saved: [],
        hasData: true,
      };
    case ACTIONS.GET_DATA:
      return {
        ...state,
        loading: false,
        isLoaded: false,
        jobs: action.payload.jobs.slice(0, 5),
        hasData,
        saved: action.payload.saved,
      };
    case ACTIONS.ERROR:
      return {
        ...state,
        loading: false,
        isLoaded: false,
        error: action.payload.error,
        jobs: [],
        saved: [],
      };
    default:
      return state;
  }
};

const fetchJobs = (params, page) => {
  const [user, setUser] = useState(null);

  const [state, dispatch] = useReducer(reducer, {
    jobs: [],
    saved: [],
    loading: true,
    isLoaded: true,
    error: false,
    hasData: true,
  });

  useEffect(async () => {
    const token = document.cookie;
    if (token) {
      setUser(jwt(token.slice(6)));
    }

    const cancelToken = axios.CancelToken.source();
    dispatch({ type: ACTIONS.MAKE_REQUEST });
    try {
      const jobs = await axios.get('http://localhost:4002/api/joblisting', {
        cancelToken: cancelToken.token,
        params: {
          // category: 'Software Engineer',
          page,
          ...params,
        },
      });
      let saved;
      if (user) {
        saved = await axios.get(`http://localhost:4008/saved/id/${user}`);
      } else {
        saved = { data: [] };
      }

      const userSaved = Object.values(saved.data).map((item) => item.job_id);

      const dataLength = jobs.length;
      if (dataLength !== 0) {
        hasData = true;
        dispatch({
          type: ACTIONS.GET_DATA,
          payload: {
            jobs: Object.values(jobs.data),
            saved: userSaved,
            isLoaded: true,
            hasData,
          },
        });
      } else {
        hasData = false;
        dispatch({
          type: ACTIONS.GET_DATA,
          payload: {
            jobs: state.jobs,
            saved: userSaved,
            isLoaded: true,
            hasData,
          },
        });
      }
    } catch (err) {
      if (axios.isCancel(err)) return;
      dispatch({ type: ACTIONS.ERROR, payload: { error: err } });
    }
    cancelToken.cancel();
  }, [params, page]);

  return state;
};

export default fetchJobs;
