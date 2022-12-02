//must submit to different port for each table
import React, { useState, useEffect } from "react";
import Axios from "axios";
// import "./Cart.css";

function Cart() {
  const [cartid, setCartid] = useState("");
  const [productid, setProductid] = useState("");
  const [item, setItem] = useState("");
  // const [image, setImage] = useState("");
  const [sale, setSale] = useState("");
  const [user, setUser] = useState("");
  const [count, setCount] = useState("");
  const [cartList, setCartList] = useState([]);
  const [updateRecord, setUpdateRecord] = useState("");

  useEffect(() => {
    Axios.get("http://localhost:4001/cart").then((response) => {
      setCartList(response.data);
    });
  }, []);

  const submitCart = () => {
    Axios.post("http://localhost:4001/cart", {
      cartid: cartid,
      productid: productid,
      item: item,
      user: user,
      // image: image,
      count: count,
      sale: sale,
    });
    console.log(cartid, setCartid);

    setCartList([
      ...cartList,
      {
        cartid: cartid,
        productid: productid,
        item: item,
        user: user,
        // image: image,
        count: count,
        sale: sale,
      },
    ]);
  };

  const mapList = cartList.map((cart, index) => (
    <div key={index}>
      <div id="card">
        <div id="cartList">Item Number: {cart.cartid} </div>
        <h3 id="cartList">{cart.productid} - </h3>
        <p id="cartList">{cart.item} - </p>
        <p id="cartList">{cart.user} - </p>
        <p id="cartList">{`COMING SOON`} - </p>
        <p id="cartList">{cart.count} - </p>
        <p id="cartList">{cart.sale}</p>
        <button
          onClick={() => {
            deleteCart(cart.cartid);
          }}
        >
          Delete
        </button>
        <input
          type="text"
          id="updateInput"
          onChange={(e) => {
            setUpdateRecord(e.target.value);
          }}
        />
        <button
          onClick={() => {
            updateCart(cart.cartid, updateRecord);
          }}
        >
          Change Sale $$
        </button>
      </div>
    </div>
  ));
  // console.log(mapList);
  console.log("Kevin", updateRecord);

  const updateCart = (cartid, sale) => {
    Axios.put("http://localhost:4001/cart", {
      cartid: cartid,
      // productid: productid,
      // item: item,
      // user: user,
      // count: count,
      sale: sale,
    });
    setUpdateRecord("");
  };

  // const deleteCart = (cartid) => {
  //   Axios.delete(`http://localhost:4001/cart/${cartid}`);
  // };

  const deleteCart = (cartid) => {
    Axios.delete(`http://localhost:4001/cart/${cartid}`).then((response) => {
      console.log(response);
      setCartList(cartList.filter((item) => item.cartid !== cartid));
    });
  };

  return (
    <div className="cart">
      <h1 id="productTitle">SHOPPING CART</h1>

      <div className="form">
        <label>Productid</label>
        <input
          type="text"
          name="productid"
          onChange={(e) => {
            setProductid(e.target.value);
          }}
        />
        <label>Item Name</label>
        <input
          type="text"
          name="item"
          onChange={(e) => {
            setItem(e.target.value);
          }}
        />
        <label>User</label>
        <input
          type="text"
          name="user"
          onChange={(e) => {
            setUser(e.target.value);
          }}
        />

        <label>Count</label>
        <input
          type="text"
          name="count"
          onChange={(e) => {
            setCount(e.target.value);
          }}
        />
        <label>Sale</label>
        <input
          type="text"
          name="sale"
          onChange={(e) => {
            setSale(e.target.value);
          }}
        />
        <button onClick={submitCart}>Submit</button>

        <div className="mapList">{mapList}</div>
      </div>
    </div>
  );
}

export default Cart;
