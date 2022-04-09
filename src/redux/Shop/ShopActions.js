import { ORDER_ITEM } from "./ShopActionTypes";

export const orderItem = (itemObj) => {
  return {
    type: ORDER_ITEM,
    itemObj,
  };
};
