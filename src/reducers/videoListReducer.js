import {FETCH_VIDEO_LIST} from '../actions/fetch-videos-action';

// The reducer is a pure function that takes the previous state and an action, and returns the next state.
export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_VIDEO_LIST:
    {	console.log("Reducer called success", action.payload)
          return [action.payload, ...state];
      }
    default:
          return state;
  }
};