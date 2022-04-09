import { combineReducers, createStore } from "redux";
import cakeReducer from "./Cake/CakeReducers";
import IcecreamReducer from "./Icecream/IcecreamReducers";
import { applyMiddleware } from "redux";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import userReducer from "./User/UserReducer";
import ShopReducer from "./Shop/ShopReducers";
import thunk from "redux-thunk";

const store = createStore(
  combineReducers({
    cakeReducer,
    IcecreamReducer,
    userReducer,
    ShopReducer,
  }),
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
