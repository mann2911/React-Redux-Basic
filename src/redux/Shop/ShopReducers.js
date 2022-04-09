import { ORDER_ITEM } from "./ShopActionTypes";

const initialState = {
  items: [],
};

const ShopReducer = (state = initialState, action) => {
  console.log(state);
  switch (action.type) {
    case ORDER_ITEM:
      return {
        ...state,
        items: [...state.items, action.itemObj],
      };

    default:
      return state;
  }
};

export default ShopReducer;
