import { BUY_ICECREAM } from "./IcecreamTypes";

const initialState = {
  numOfIcecreams: 50,
};

const IcecreamReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numOfIcecreams: state.numOfIcecreams - 1,
      };

    default:
      return state;
  }
};

export default IcecreamReducer;
