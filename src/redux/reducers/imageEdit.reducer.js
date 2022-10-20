const imageEditReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_EDITIMAGE':
      return action.payload;
    case 'CLEAR_EDITIMAGE':
      return (state = []);
    default:
      return state;
  }
};

export default imageEditReducer;
