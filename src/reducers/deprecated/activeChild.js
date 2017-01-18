import STUBS_CHORES from './chores';

const activeChild = function(state = null, action) {
  if (action.type === 'ACTIVE_CHILD') {
    return action.payload;
  }
  return state;
};

module.exports = activeChild;
