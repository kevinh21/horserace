//Clean UP - must submit to different port for each table
import React, { useState, useEffect, useMemo } from "react";
import Axios from "axios";
import "./Cart.css";
import "../ProductBrowse/ProductBrowse.css";
// import Checkout from "./Checkout";
import { NavLink } from "react-router-dom";

function Cart(props) {
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

  useEffect(
    (props) => {
      Axios.get("http://localhost:4001/cart").then((response) => {
        setCartList(response.data);
        // const fileData = JSON.stringify(response.data);
        // const output = `const data = {products: ${fileData} }`;
        // setData(output);
        console.log("Response.data", response.data);
      });
    },
    [props]
  );
  console.log(data);

  useEffect(() => {
    let subTotal = 0;
    cartList.forEach((cartid, index) => {
      if (!isNaN(parseFloat(cartid.price)) && !isNaN(parseFloat(cartid.count)))
        subTotal += parseFloat(cartid.price) * parseFloat(cartid.count);
    });
    console.log(subTotal);
    setTotal(subTotal);
  }, [cartList]);

  const sendToWishList = (wish) => {
    Axios.post("http://localhost:5001/wish", {
      cartid: cartid,
      productid: wish.productid,
      item: wish.item,
      price: wish.price,
      user: wish.user,
      image: wish.image,
      count: wish.count,
    });

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
      },
    ]);
  };

  const mapList = cartList.map((cart, index) => {
    return (
      <div key={index}>
        <div className="cartCards">
          <img id="picture" alt="cartPic" src={cart.image} />
          <div id="cartData">Item Number: {cart.cartid} </div>
          <h3 id="cartData">SKU # {cart.productid} </h3>
          <p id="cartData">Item - {cart.item} </p>
          <p id="cartData">Price - ${cart.price}</p>
          {/* <p id="cartData">User - {cart.user} </p> */}
          <p id="cartData">Qty - {cart.count} </p>
          <p id="cartData">
            SubTotal - ${parseFloat(cart.price) * parseFloat(cart.count)}
          </p>
          <div className="buttonGroupCart">
            <div id="qtyBtnGroup">
              <input
                id="updateQty"
                type="number"
                onChange={(e) => {
                  setCount(e.target.value);
                }}
              />
              <div className="cartButtons">
                <button
                  id="buttonChange"
                  onClick={() => {
                    changeCartQty(
                      cart.cartid,
                      productid,
                      item,
                      price,
                      user,
                      count,
                      image,
                      date
                    );
                    setPrice(price);
                  }}
                >
                  Enter Qty.
                </button>
              </div>

              <div className="alignButtons">
                <button
                  id="buttonRemove"
                  onClick={() => {
                    deleteCart(cart.cartid);
                  }}
                >
                  Remove Item (-)
                </button>
                <button
                  id="buttonSaveWish"
                  onClick={() => {
                    sendToWishList(cart);
                    deleteCart(cart.cartid);
                  }}
                >
                  Save Wishlist (+)
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });

  const changeCartQty = (cartid, productid, item, price, user, count) => {
    Axios.put("http://localhost:4001/cart", {
      cartid: cartid,
      productid: productid,
      item: item,
      price: price,
      user: user,
      count: count,
    });
    setCount("");
  };

  const deleteCart = (cartid) => {
    Axios.delete(`http://localhost:4001/cart/${cartid}`).then((response) => {
      console.log(response);
      setCartList(cartList.filter((item) => item.cartid !== cartid));
    });
  };

  return (
    <div className="cartContainer">
      <div className="checkout"></div>
      <div id="cartTitle">
        Your Cart
        <div id="cartTotal"> Items SubTotal: </div>
        <div id="total">
          ${total}
          <NavLink id="buttonCheckout" to="/checkout">
            CHECKOUT HERE{" "}
          </NavLink>
        </div>
      </div>
      <div className="mapList"> {mapList} </div>
      <br />
    </div>
  );
}

export default Cart;
