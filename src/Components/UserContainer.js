import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../redux/User/UserActions";
function UserContainer() {
  const users = useSelector((state) => state.userReducer.users);
  const loading = useSelector((state) => state.userReducer.loading);
  const error = useSelector((state) => state.userReducer.error);
  const dispatch = useDispatch();

  return (
    <div>
      <button
        onClick={() => {
          dispatch(fetchUser());
        }}
      >
        get Users
      </button>
      {/* <h2>List of users :{users}</h2> */}
      <br />
      <br />
      <br />
      {loading
        ? "Loading Data"
        : users.map((user) => {
            return user.name;
          })}
    </div>
  );
}

export default UserContainer;
