/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
import axios from "axios";

export const FETCH_SMURFS_START = "FETCH_SMURFS_START";
export const FETCH_SMURFS_SUCCESS = "FETCH_SMURFS_SUCCESS";
export const FETCH_SMURFS_FAILURE = "FETCH_SMURFS_FAILURE";

export const ADD_SMURF = "ADD_SMURF";
export const ADD_SMURF_SUCCESS = "ADD_SMURF_SUCCESS";
export const ADD_SMURF_FAILURE = "ADD_SMURF_FAILURE";

export const DELETE_SMURF = "DELETE_SMURF";
export const DELETE_SMURF_SUCCESS = "DELETE_SMURF_SUCCESS";
export const DELETE_SMURF_FAILURE = "DELETE_SMURF_FAILURE";

export const UPDATE_SMURF = "UPDATE_SMURF";

export const fetchSmurfs = () => dispatch => {
  dispatch({ type: FETCH_SMURFS_START });
  axios
    .get("http://localhost:3333/smurfs")
    .then(res => {
      console.log(res);
      dispatch({ type: FETCH_SMURFS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: FETCH_SMURFS_FAILURE, payload: err.ersponse });
    });
};

export const addSmurf = smurf => dispatch => {
  axios
    .post("http://localhost:3333/smurfs", smurf)
    .then(res => {
      console.log(res);
      dispatch({ type: ADD_SMURF, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: ADD_SMURF_FAILURE, payload: err.response });
    });
};

export const deleteSmurf = id => dispatch => {
  axios
    .delete(`http://localhost:3333/smurfs/${id}`)
    .then(res => {
      console.log(res);
      dispatch({ type: DELETE_SMURF, payload: res.data });
    })
    .catch(err => {
      console.log(err);
    });
};

export const setUpdateForm = (e, smurf) => {
  e.preventDefault();
  this.setState;
};

export const updateSmurf = id => dispatch => {
  axios
    .put(`http://localhost:3333/smurfs/${id}`)
    .then(res => {
      console.log(res);
      dispatch({ type: UPDATE_SMURF, payload: res.data });
    })
    .catch(err => {
      console.log(err);
    });
};
/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/
