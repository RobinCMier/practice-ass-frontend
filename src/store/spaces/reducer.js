//set up initial store, vanilla function
//imports

const initialState = {
  loading: true,
  spaces: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "spaces/startLoading": {
      return {
        ...state,
        loading: true,
      };
    }
    case "spaces/spacesAdded": {
      console.log("this is reducer payload: ", action.payload);
      return {
        loading: false,
        spaces: [...state.spaces, ...action.payload],
      };
    }
    default:
      return state;
  }
};
