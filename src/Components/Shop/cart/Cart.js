//must submit to different port for each table
import React, { useState, useEffect } from "react";
import Axios from "axios";
// import "./Cart.css";

function Cart() {
  const [cartid, setCartid] = useState("");
  const [productid, setProductid] = useState("");
  const [item, setItem] = useState("");
  const [image, setImage] = useState("");
  const [sale, setSale] = useState("");
  const [user, setUser] = useState("");
  const [count, setCount] = useState("1");
  const [cartList, setCartList] = useState([]);
  // const [updateRecord, setUpdateRecord] = useState("");

  useEffect(() => {
    Axios.get("http://localhost:4001/cart").then((response) => {
      setCartList(response.data);
    });
  }, []);

  const sendToWishList = (wish) => {
    Axios.post("http://localhost:5001/wish", {
      cartid: cartid,
      productid: wish.productid,
      item: wish.item,
      sale: wish.sale,
      user: wish.user,
      // count: count,
      image: wish.image,
    });

    setCartList([
      ...cartList,
      {
        cartid: cartid,
        productid: productid,
        item: item,
        sale: sale,
        user: user,
        image: image,
        count: count,
      },
    ]);
  };

  // console.log("COUNT-1-KH", count);

  const mapList = cartList.map((cart, index) => (
    <div key={index}>
      <div id="card">
        <div id="cartList">Item Number: {cart.cartid} </div>
        <h3 id="cartList">SKU # {cart.productid} </h3>
        <p id="cartList">Item - {cart.item} </p>
        <p id="cartList">Sale ${cart.sale}</p>
        <p id="cartList">User {cart.user} </p>
        <p id="cartList">Qty - {cart.count} </p>
        <p id="cartList">Picture - {`COMING SOON`}</p>
        <button
          onClick={() => {
            deleteCart(cart.cartid);
          }}
        >
          Remove (-)
        </button>
        <input
          type="text"
          id="updateCount"
          onChange={(e) => {
            setCount(e.target.value);
          }}
        />
        <button
          onClick={() => {
            // console.log("Kevin-UPDATECOUNT", cart.cartid, item, sale, user, count);
            changeCartQty(cart.cartid, productid, item, sale, user, count);
          }}
        >
          Enter Qty.
        </button>
        {/* ////////////// */}
        <button
          onClick={() => {
            sendToWishList(cart);
            deleteCart(cart.cartid);
          }}
        >
          Save Wishlist (+)
        </button>
      </div>
    </div>
  ));

  const changeCartQty = (cartid, productid, item, sale, user, count) => {
    Axios.put("http://localhost:4001/cart", {
      cartid: cartid,
      productid: productid,
      item: item,
      sale: sale,
      user: user,
      count: count,
    });
    setCount("");
    console.log("AFTER SET Count", cartid, count);
  };

  const deleteCart = (cartid) => {
    Axios.delete(`http://localhost:4001/cart/${cartid}`).then((response) => {
      console.log(response);
      setCartList(cartList.filter((item) => item.cartid !== cartid));
    });
  };

  return (
    <div className="cart">
      <h1 id="productTitle">SHOPPING CART</h1>

      {/* <button onClick={submitCart}>Check Out</button> */}

      <div className="mapList">{mapList}</div>
    </div>
  );
}

export default Cart;
