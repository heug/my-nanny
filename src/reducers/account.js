const AccountReducer = (state = {
  isFetching: false,
  editable: false,
  token: null,
  username: null,
  email: null,
  phone: null, 
  timezone: null
}, action) => {
  if ( action.type === 'REQUEST_ACCOUNT' ) {
    return Object.assign({}, state, {
      isFetching: true,
      token: action.payload
    });
  } else if ( action.type === 'RECEIVE_ACCOUNT' ) {
    return Object.assign({}, state, {
      isFetching: false,
      username: action.payload.username,
      email: action.payload.email,
      phone: action.payload.phone,
      timezone: action.payload.timezone,
      token: action.token
    });
  } else if ( action.type === 'TOGGLE_EDITABLE' ) {
    console.log('TOGGLE_EDITABLE Reducer');
    return Object.assign({}, state, {
      editable: !state.editable
    });
  } else {
    return state;
  }
};

export default AccountReducer;
