export const initialState ={
  dashboard: [],
};

const reducer =( state, action) => {
  console.log(action)
  switch(action.type){
    case 'ADD_TO_DASHBOARD':
        return {
          ...state,
          dashboard: [...state.dashboard, action.graph]
        };

        default:
        return state;

  }
}

export default reducer;