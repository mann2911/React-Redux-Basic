import { BUY_CAKE } from "./CakeTypes";

export const buyCake = (orderedCakes) => {
  return {
    type: BUY_CAKE,
    orderedCakes: orderedCakes,
  };
};
