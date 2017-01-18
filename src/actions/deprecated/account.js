import fetch from 'isomorphic-fetch';
 

const token = localStorage.getItem('amazon-token');
const url = 'https://localhost:1337/api/account?access_token=' + token;

export const REQUEST_ACCOUNT = 'REQUEST_ACCOUNT';
export const requestAccount = () => {
  return {
    type: REQUEST_ACCOUNT
  };
};

export const RECEIVE_ACCOUNT = 'RECEIVE_ACCOUNT';
export const receiveAccount = (accountData) => {
  return {
    type: RECEIVE_ACCOUNT,
    payload: accountData,
    token: token
  };
};

export const RECEIVE_CHILDREN = 'RECEIVE_CHILDREN';
export const receiveChildren = (childrenData) => {
  return {
    type: RECEIVE_CHILDREN,
    payload: childrenData
  };
};

export const getAccount = () => {
  return function(dispatch) {
    dispatch(requestAccount());
    return fetch(url)
    .then((response) => {
      if (response.status >= 400) {
        throw new Error('Bad response from server.');
      }
      return response.json();
    })
    .then(function(data) {
      dispatch(receiveAccount(data));
      if (data.children) {
        dispatch(receiveChildren(data));
      }
    });
  };
};

export const updateAccountInStore = (username, phone, timezone, email) => {
  const newAccountData = {
    username: username,
    phone: phone,
    timezone: timezone, 
    email: email
  };
  return function(dispatch) {
    dispatch(receiveAccount(newAccountData));
  };
};

export const toggleEditable = () => {
  return {
    type: 'TOGGLE_EDITABLE'
  };
};

// export const TOGGLE_CHILD_EDIT = 'TOGGLE_CHILD_EDIT';
export const toggleEditChild = (id) => {
  return {
    type: 'TOGGLE_CHILD_EDIT',
    payload: id
  };
};

export const TOGGLE_CHILD_SHOW = 'TOGGLE_CHILD_SHOW';
export const toggleShowChild = (id) => {
  return {
    type: TOGGLE_CHILD_SHOW,
    payload: id
  };
};