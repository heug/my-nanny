import { combineReducers } from 'redux';
import AccountReducer from './account';
import ChoresReducer from './chores';
import ChildrenReducer from './children';
import ScheduleReducer from './schedule';

const allReducers = combineReducers({
  account: AccountReducer,
  children: ChildrenReducer,
  chores: ChoresReducer, 
  schedule: ScheduleReducer
});

export default allReducers;
