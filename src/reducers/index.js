import { combineReducers } from 'redux';

import main from './mainReducer'

const AppReducer = combineReducers({
  main
});

export default AppReducer;
