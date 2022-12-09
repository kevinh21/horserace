//Clean UP - must submit to different port for each table
import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./Checkout.css";
import { now } from "moment/moment";
import { NavLink } from "react-router-dom";

function Checkout(props) {
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
  console.log(data);

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
      sendToCheckout(cartItem);
      deleteCart(cartItem.cartid);
      console.log("54 here", cartItem);
    });
  };

  const sendToCheckout = (checkout) => {
    Axios.post("http://localhost:6001/checkout", {
      cartid: cartid,
      productid: checkout.productid,
      item: checkout.item,
      price: checkout.price,
      user: checkout.user,
      image: checkout.image,
      count: checkout.count,
      date: checkout.date,
      orderNumber: checkout.orderNumber,
    });

    console.log(cart);

    setCartList([
      ...cartList,
      {
        cartid: cartid,
        productid: productid,
        item: item,
        price: price,
        user: user,
        image: image,
        count: count,
        date: date,
        orderNumber: orderNumber,
      },
    ]);
  };

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
              sendToCheckout(cart);
            }}
          >
            Pay Now
          </button>
        </div>
      </div>
    );
  });

  const deleteCart = (cartid) => {
    Axios.delete(`http://localhost:4001/cart/${cartid}`).then((response) => {
      console.log(response);
      setCartList(cartList.filter((item) => item.cartid !== cartid));
    });
  };

  return (
    <div className="checkoutContainer">
      <div className="checkoutList">
        <div id="checkoutSummary">Checkout Summary:</div>
        {checkoutList}
      </div>
      <div id="checkoutTitle">
        Checkout
        <div id="checkoutSubTotal">
          {" "}
          SubTotal: ${(total / 1.075).toFixed(2)}
        </div>
        <div id="checkoutTax">
          Tax: ${(total * 0.075).toFixed(2)}
          <div>
            <div id="checkoutTotal"> Total: ${(total * 1).toFixed(2)}</div>
          </div>
        </div>
        {/* (BUTTON BELOW NEEDS TO GENERATE A RANDOM NUMBER BY BASE + INCREMENT COUNTER) */}
        {
          <div className="payButton">
            <button
              id="buttoncheckout"
              onClick={() => {
                setOrderNumber(parseInt(orderNumber + 1));
                sendToCheckout(cart);
              }}
            >
              Pay Now{" "}
            </button>
          </div>
        }
      </div>
      <br />
      <div>
        {" "}
        <div id="checkoutCards">
          <img
            alt="credit logos"
            src="https://cdn.shopify.com/shopifycloud/brochure/assets/seo/tour/shopping_cart/feature-2-small-79a480370feb0dfb3a4242a27f02c91f57b914664ce06bc733165666d7a7dea2.jpg"
          />
        </div>
        <div>
          <form>
            <div className="checkoutInfo">
              <label>First Name</label>
              <input
                type="text"
                name="first"
                // onChange={(e) => {
                //   setName(e.target.value);
                // }}
              />
              <label>Last Name</label>
              <input
                type="text"
                name="last"
                // onChange={(e) => {
                //   setItem(e.target.value);
                // }}
              />
              <label>Address</label>
              <input
                type="text"
                name="address"
                // onChange={(e) => {
                //   setDescription(e.target.value);
                // }}
              />
              <label>City</label>
              <input
                type="text"
                name="city"
                // onChange={(e) => {
                //   setImage(e.target.value);
                // }}
              />
              <label>State</label>
              <input
                type="text"
                name="state"
                // onChange={(e) => {
                //   setPrice(e.target.value);
                // }}
              />{" "}
              <label>Postal Code</label>
              <input
                type="text"
                name="zip"
                // onChange={(e) => {
                //   setRetail(e.target.value);
                // }}
              />{" "}
              <label>Phone Number</label>
              <input
                type="text"
                name="phone"
                // onChange={(e) => {
                //   setRetail(e.target.value);
                // }}
              />{" "}
              <label>Cart Number</label>
              <input
                type="text"
                name="card"
                // onChange={(e) => {
                //   setRetail(e.target.value);
                // }}
              />{" "}
              <label>Expiration Date</label>
              <input
                type="date"
                name="expire"
                // onChange={(e) => {
                //   setRetail(e.target.value);
                // }}
              />
              <label>Security Code</label>
              <input
                type="text"
                name="cv"
                // onChange={(e) => {
                //   setRetail(e.target.value);
                // }}
              />
              <div id="payButton">
                <NavLink to="/returns">
                  <button type="button" id="buttoncheckout" onClick={checkout}>
                    Pay Now
                  </button>
                </NavLink>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
