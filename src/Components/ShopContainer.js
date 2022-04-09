import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { orderItem } from "../redux/Shop/ShopActions";
import TimerComponent from "./TimerComponent";

function ShopContainer() {
  const data = [
    {
      itemId: 1,
      itemName: "Pizza",
      itemPrice: "250 Rps",
      itemCookingTime: "30 mins",
    },
    {
      itemId: 2,
      itemName: "Burger",
      itemPrice: "50 Rps",
      itemCookingTime: "20 mins",
    },
    {
      itemId: 3,
      itemName: "Pasta",
      itemPrice: "100 Rps",
      itemCookingTime: "25 mins",
    },
    {
      itemId: 4,
      itemName: "Sandwich",
      itemPrice: "70 Rps",
      itemCookingTime: "10 mins",
    },
  ];
  const placeOrder = (id) => {
    let itemData = {};
    data.map((item) => {
      return item.itemId === id ? (itemData = item) : "m";
    });
    dispatch(orderItem(itemData));
  };

  const dispatch = useDispatch();
  const orderItemsData = useSelector((state) => state.ShopReducer.items);

  return (
    <div>
      <button className="btn btn-danger m-5">
        {" "}
        <h1>welcome to Mann's Shop!</h1>
      </button>
      {console.log("data", data)}
      <div className="row">
        <div className="col-6 col-sm-6">
          <table className="table table-bordered table-hover">
            <thead>
              <tr>
                <th>Item Id</th>
                <th>Item Name</th>
                <th>Item Price(in Rps)</th>
                <th>Cooking Time(in mins)</th>
                <th>Order</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => {
                return (
                  <tr className="table-primary">
                    <td>{item.itemId}</td>
                    <td>{item.itemName}</td>
                    <td>{item.itemPrice}</td>
                    <td>{item.itemCookingTime}</td>
                    <td>
                      <button
                        className="btn btn-success"
                        onClick={() => {
                          placeOrder(item.itemId);
                        }}
                      >
                        Place Order
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        {console.log("orderItemsData", orderItemsData)}
        <div className="col-6 col-sm-6">
          <div className="container border">
            <h3>Order Placed</h3>
            <table className="table table-bordered table-hover">
              <thead>
                <tr>
                  <th>Item Id</th>
                  <th>Item Name</th>

                  <th>Time To Eat</th>
                </tr>
              </thead>
              <tbody>
                {orderItemsData.map((item) => {
                  return (
                    <tr className="table-primary">
                      <td>{item.itemId}</td>
                      <td>{item.itemName}</td>
                      <td>
                        <TimerComponent time={item.itemCookingTime} />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopContainer;
