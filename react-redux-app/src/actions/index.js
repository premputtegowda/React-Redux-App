import axios from 'axios';

export const FETCHING_ACTIVITY_START = 'FETCHING_ACTIVITY_START';
export const FETCHING_ACTIVITY_SUCCESS = 'FETCHING_ACTIVITY_SUCCESS';
export const FETCHING_ACTIVITY_FAILURE = 'FETCHING_ACTIVITY_FAILURE';

export const fetchActivity = (skill,location) => dispatch => {
  dispatch({ type: FETCHING_ACTIVITY_START });
  axios
    .get(`https://github-jobs-proxy.appspot.com/positions?description=${skill}&location=${location}`)
    .then(res => {
      
     dispatch({ type: FETCHING_ACTIVITY_SUCCESS, payload: res.data });
   
    })
    .catch(err => {
    
    dispatch({ type: FETCHING_ACTIVITY_FAILURE, payload: err.response });
    
    });
};