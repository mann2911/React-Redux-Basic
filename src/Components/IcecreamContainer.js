import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyicecream } from "../redux/Icecream/IcecreamActions";

function IcecreamContainer() {
  const icecreams = useSelector(
    (state) => state.IcecreamReducer.numOfIcecreams
  );
  const dispatch = useDispatch();
  return (
    <div>
      <h2> Number of Icecreams : {icecreams} </h2>
      <button onClick={() => dispatch(buyicecream())}>Buy Icecreams </button>
    </div>
  );
}

export default IcecreamContainer;
