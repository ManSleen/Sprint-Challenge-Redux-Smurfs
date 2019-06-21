import {
  FETCH_SMURFS_START,
  FETCH_SMURFS_SUCCESS,
  FETCH_SMURFS_FAILURE,
  ADD_SMURF,
  ADD_SMURF_FAILURE,
  ADD_SMURF_SUCCESS,
  DELETE_SMURF,
  DELETE_SMURF_SUCCESS,
  DELETE_SMURF_FAILURE
} from "../actions";

//  Your initial/default state for this project could *Although does not have to* look a lot like this

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  isLoading: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SMURFS_START:
      return {
        ...state,
        fetchingSmurfs: true,
        isLoading: true,
        error: ""
      };
    case FETCH_SMURFS_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        fetchingSmurfs: false,
        isLoading: false,
        error: ""
      };
    case FETCH_SMURFS_FAILURE:
      return {
        ...state,
        fetchingSmurfs: false,
        isLoading: false,
        error: "You've encountered an error!"
      };
    case ADD_SMURF:
      return {
        ...state,
        smurfs: action.payload,
        addingSmurf: true,
        isLoading: false,
        error: ""
      };
    case ADD_SMURF_SUCCESS:
      return {
        ...state,
        addingSmurf: false,
        isLoading: false,
        error: ""
      };
    case ADD_SMURF_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    case DELETE_SMURF:
      return {
        ...state,
        smurfs: action.payload
      };
    default:
      return state;
  }
};

export default reducer;

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
