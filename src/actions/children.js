import fetch from 'isomorphic-fetch';


export const requestSchedule = () => {
  return {
    type: 'REQUEST_SCHEDULE'
  };
};

export const receiveSchedule = (schedule, childId) => {
  return {
    type: 'RECEIVE_SCHEDULE',
    payload: {
      childId: childId,
      schedule: schedule
    }
  };
};

export const getSchedule = (token, childId) => {
  const url = 'https://api.my-nanny.org/api/children/' + childId +
   '/schedule?access_token=' + token;
  return function(dispatch) {
    dispatch(requestSchedule());
    fetch(url)
    .then((res) => {
      // console.log('response', res.json());
      if (res.status >= 400) {
        throw new Error('Bad res from server.');
      }
      // var data = res.json();
      // console.log('schedule', data);
      return res.json();
    })
    .then(function(data) {
      console.log('schedule', data.schedule);
      dispatch(receiveSchedule(data.schedule, childId));
    });
  };
};
