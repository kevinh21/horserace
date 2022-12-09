//Clean UP - must submit to different port for each table
import React, { useState, useEffect } from "react";
import Axios from "axios";
import "../Cart/Checkout.css";
import { now } from "moment/moment";
import { NavLink } from "react-router-dom";

function Returns(props) {
  const [cartid, setCartid] = useState("");
  const [productid, setProductid] = useState("");
  const [item, setItem] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [user, setUser] = useState("");
  const [cart, setCart] = useState("");
  const [count, setCount] = useState("1");
  const [data, setData] = useState("");
  const [total, setTotal] = useState();
  const [cartList, setCartList] = useState([]);
  const [date, setDate] = useState("");
  const [orderNumber, setOrderNumber] = useState(now);

  useEffect(
    (props) => {
      Axios.get("http://localhost:4001/cart").then((response) => {
        setCartList(response.data);
        // const fileData = JSON.stringify(response.data);
        // const output = {fileData};
        // setData(output);
        console.log("Response.data", response.data);
      });
    },
    [props]
  );
  // console.log(data);

  useEffect(() => {
    let subTotal = 0;
    let tax = 1.0725;
    cartList.forEach((cartItem, index) => {
      if (
        !isNaN(parseFloat(cartItem.price)) &&
        !isNaN(parseFloat(cartItem.count))
      )
        subTotal +=
          parseFloat(cartItem.price) * parseFloat(cartItem.count) * tax;
    });
    console.log(subTotal);
    setTotal(subTotal);
  }, [cartList]);

  const checkout = () => {
    setOrderNumber(orderNumber + 1);
    console.log(orderNumber);
    cartList.forEach((cartItem, index) => {
      cartItem.orderNumber = orderNumber;
      // sendToCheckout(cartItem);
      console.log("54 here", cartItem);
    });
  };


  

  // const sendToCheckout = (checkout) => {
  //   Axios.post("http://localhost:6001/checkout", {
  //     cartid: cartid,
  //     productid: checkout.productid,
  //     item: checkout.item,
  //     price: checkout.price,
  //     user: checkout.user,
  //     image: checkout.image,
  //     count: checkout.count,
  //     date: checkout.date,
  //     orderNumber: checkout.orderNumber,
  //   });

  // console.log(cart);

  // setCartList([
  //   ...cartList,
  //   {
  //     cartid: cartid,
  //     productid: productid,
  //     item: item,
  //     price: price,
  //     user: user,
  //     image: image,
  //     count: count,
  //     date: date,
  //     orderNumber: orderNumber,
  //   },
  // ]);
  // };

  const checkoutList = cartList.map((cart, index) => {
    return (
      <div key={index}>
        <div className="cartCards">
          <img id="picture" alt="cartPic" src={cart.image} />
          <p id="cartData">Price - ${cart.price}</p>
          <p id="cartData">Qty - {cart.count} </p>
          <p id="cartData">
            SubTotal - ${parseFloat(cart.price) * parseFloat(cart.count)}
          </p>
          <button
            id="buttoncheckout"
            onClick={() => {
              setOrderNumber(parseInt(orderNumber + 1));
              // sendToCheckout(cart);
            }}
          >
            Pay Now
          </button>
        </div>
      </div>
    );
  });

  // const deleteCart = (cartid) => {
  //   Axios.delete(`http://localhost:4001/cart/${cartid}`).then((response) => {
  //     console.log(response);
  //     setCartList(cartList.filter((item) => item.cartid !== cartid));
  //   });
  // };

  return (
    <div className="checkoutContainer">
      {/* <div className="checkoutList">
        <div id="checkoutSummary">Checkout Summary:</div>
      </div>
      <div id="checkoutTitle">
        Checkout
        <div id="checkoutSubTotal">
          {" "}
          SubTotal: ${(total / 1.075).toFixed(2)}
        </div>
        <div id="checkoutTax">
          Tax: ${(total * 0.075).toFixed(2)}
          
        </div>
       
           <div className="payButton">
             <button
              id="buttoncheckout"
              onClick={() => {
                setOrderNumber(parseInt(orderNumber + 1));
             
              }}
            >
              Pay Now{" "}
            </button>
          </div>
        {/* } */}
      Your Order Number: {orderNumber}
      <br/>          Total Items in Order: {count}

      <div>
        {/* <div id="checkoutTotal"> Totsfgsgal: ${(total * 1).toFixed(2)}</div> */}
      </div>
      <div id="checkoutSubTotal"> SubTotal: ${(total / 1.075).toFixed(2)}</div>  
      <div id="checkoutTax">
        Tax: ${(total * 0.075).toFixed(2)}
        <div>
          <div id="checkoutTotal"> Total: ${(total * 1).toFixed(2)}</div>
        </div>
      </div>
    </div>
  );
}

export default Returns;
