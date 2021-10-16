import axios from 'axios';
import React, { useReducer, useEffect } from 'react';
const ACTIONS = {
  MAKE_REQUEST: 'make_request',
  GET_DATA: 'get-data',
  ERROR: 'error',
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.MAKE_REQUEST:
      return { loading: true, jobs: [] };
    case ACTIONS.GET_DATA:
      return { ...state, loading: false, jobs: action.payload.jobs };
    case ACTIONS.ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        jobs: [],
      };
    default:
      return state;
  }
};

const fetchJobs = (params, page) => {
  const [state, dispatch] = useReducer(reducer, {
    jobs: [],
    loading: true,
    error: false,
  });

  useEffect(() => {
    const cancel_Token = axios.CancelToken.source();
    dispatch({ type: ACTIONS.MAKE_REQUEST });
    axios
      .get('https://www.themuse.com/api/public/jobs', {
        cancelToken: cancel_Token.token,
        params: {
          category: 'Software Engineer',
          page: page,
          ...params,
        },
      })
      .then((res) => {
        dispatch({
          type: ACTIONS.GET_DATA,
          payload: { jobs: Object.values(res.data.results) },
        });
      })
      .catch((err) => {
        if (axios.isCancel(err)) return;
        dispatch({ type: ACTIONS.ERROR, payload: { error: err } });
      });
    return () => {
      cancel_Token.cancel();
    };
  }, [params, page]);

  return state;
};

export default fetchJobs;
