import {combineReducers} from 'redux';  
import videoListReducer from './videoListReducer';

const rootReducer = combineReducers({  
  videoList : videoListReducer
})

export default rootReducer; 