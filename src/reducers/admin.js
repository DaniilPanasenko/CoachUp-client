
const initialState = {
  users:[],
  ban:[]
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADMIN_USERS':
      return {
        ...state,
        users:action.payload
      }
    case 'ADMIN_USER_BAN':
      let t=false;
      for(let i=0; i<state.ban.length; i++){
        if(state.ban[i]==action.payload){
          state.ban.splice(i,1);
          t=true;
          break;
        }
      }
      if(!t){
        state.ban.push(action.payload);
      }
      return {
        ...state,
      }
    default:
      return state
  }
}
