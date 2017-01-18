const ChildrenReducer = (state = {}, 
  action) => {
  if ( action.type === 'TOGGLE_CHILD_EDIT' ) {
    var obj = {};
    var key = action.payload.id;
    obj[key] = {
      name: action.payload.name,
      phone: action.payload.phone,
      show: action.payload.show,
      editable: !action.payload.editable
    };
    return Object.assign({}, state, obj);
  } else if ( action.type === 'REQUEST_CHILDREN' ) {
    return Object.assign({}, state, {
      isFetching: true
    });
  } else if ( action.type === 'RECEIVE_CHILDREN' ) {
    let list = {};
    let kids = action.payload.children;
    for (var i = 0; i < kids.length; i++) {
      let child = action.payload.children[i];
      list[child.id] = {
        name: child.name,  
        phone: child.phone,
        photo: child.photo,
        show: true,
        editable: false
      };
    }
    return list;
  } else if ( action.type === 'TOGGLE_CHILD_SHOW' ) {
    console.log('TOGGLE CHILD SHOW Reducer');
    var obj = {};
    var key = action.payload;
    obj[key] = { show: false };
    return Object.assign({}, state, obj);
  } else {
    return state;
  }
};


export default ChildrenReducer;
