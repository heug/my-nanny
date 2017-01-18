const ChoresReducer = (state = {
  isFetching: false,
  date: null,
  list: {}
}, action) => {
  if ( action.type === 'REQUEST_CHORES' ) {
    return Object.assign({}, state, {
      isFetching: true,
      date: action.payload.date
    });
  } else if ( action.type === 'RECEIVE_CHORES' ) {
    let choreObj = {};
    for (let i = 0; i < action.payload.childList.length; i++) {
      choreObj[action.payload.childList[i]] = action.payload.chores[i].chores;
    }
    return Object.assign({}, state, {
      isFetching: false,
      list: choreObj
    });
  } else {
    return state;
  }
};

export default ChoresReducer;
