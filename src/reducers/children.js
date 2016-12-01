const ChildrenReducer = (state = {}, 
  action) => {
  if ( action.type === 'TOGGLE_CHILD_EDIT' ) {
    // console.log('TOGGLE CHILD EDIT Reducer');
    var obj = {};
    var key = action.payload.id;
    obj[key] = { name: action.payload.name,
                 phone: action.payload.phone,
                 show: action.payload.show,
                 editable: !action.payload.editable };
    return Object.assign({}, state, obj);
  } else if ( action.type === 'RECEIVE_CHILDREN' ) {
    let childObj = {};
    let kids = action.payload.children;
    for (var i = 0; i < kids.length; i++) {
      let child = action.payload.children[i];
      childObj[child.id] = {
        name: child.name,  
        phone: child.phone,
        show: true,
        editable: false
      };
    }
    return childObj;
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

const ChildReducer = (state = {}, 
  action) => {
  if ( action.type === 'TOGGLE_CHILD_EDIT' ) {

  }
};

export default ChildrenReducer;


// console.log('TOGGLE CHILD EDIT Reducer');
//     // var childId = action.payload;
//     // var child = children[childId];
//     // console.log('child', child);
//     // child[childId] = { editable: true };
//     console.log('state', state);
//     var obj = {};
//     var key = action.payload.id;
//     obj[key] = { name: action.payload.name,
//                  phone: action.payload.phone,
//                  show: action.payload.show,
//                  editable: !state.editable };
//     return Object.assign({}, state, obj);