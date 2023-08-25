const rocks = (state = [], action) => {
    switch (action.type) {
      case 'RED_ROCKS':
        return action.payload;
      case 'CLEAR_ROCKS':
        return (state = []);
      default:
        return state;
    }
  };
  
  export default rocks;