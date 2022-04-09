import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyCake } from "../redux/Cake/CakeAction";

function CakeContainer() {
  const numOfCakes = useSelector((state) => state.cakeReducer.numOfCakes);
  const dispatch = useDispatch();
  const [cakes, setCakes] = useState(1);
  return (
    <div>
      <h1>How many cakes u want to buy!! </h1>
      <input
        type={"text"}
        onChange={(e) => {
          setCakes(e.target.value);
        }}
        value={cakes}
      />
      <br />
      <h2>Available cakes cakes: {numOfCakes}</h2>

      <button
        onClick={() => {
          dispatch(buyCake(cakes));
        }}
      >
        {" "}
        buy cake
      </button>
    </div>
  );
}

export default CakeContainer;
