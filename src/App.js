import React, { useEffect, useState } from "react";
import CakeContainer from "./Components/CakeContainer";
import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import IcecreamContainer from "./Components/IcecreamContainer";
import UserContainer from "./Components/UserContainer";
import ShopContainer from "./Components/ShopContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <CakeContainer />
        <br />
        <br />
        <br />
        <br />
        <hr />
        <IcecreamContainer />
        <br />
        <br />
        <br />
        <br />
        <hr />
        <UserContainer /> */}
        <ShopContainer />
      </div>
    </Provider>
  );
}

export default App;
