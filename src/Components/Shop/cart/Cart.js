//Clean UP - must submit to different port for each table
import React, { useState, useEffect, useMemo } from "react";
import Axios from "axios";
// import "./Cart.css";

function Cart(props) {
  const [cartid, setCartid] = useState("");
  const [productid, setProductid] = useState("");
  const [item, setItem] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [user, setUser] = useState("");
  const [cart, setCart] = useState("");
  const [count, setCount] = useState(1);
  const [data, setData] = useState("");
  const [total, setTotal] = useState();
  const [cartList, setCartList] = useState([]);

  useEffect(
    (props) => {
      Axios.get("http://localhost:4001/cart").then((response) => {
        setCartList(response.data);
        const fileData = JSON.stringify(response.data);
        const output = `const data = {products: ${fileData} }`;
        setData(output);
        console.log("Response.data", response.data);
      });
    },
    [props]
  );
  console.log(data);

  useEffect(() => {
    let tempTotal = 0;
    cartList.forEach((cartItem, index) => {
      if (
        !isNaN(parseFloat(cartItem.price)) &&
        !isNaN(parseFloat(cartItem.count))
      )
        tempTotal += parseFloat(cartItem.price) * parseFloat(cartItem.count);
    });
    console.log(tempTotal);
    setTotal(tempTotal);
  }, [cartList]);

  const sendToWishList = (wish) => {
    Axios.post("http://localhost:5001/wish", {
      cartid: cartid,
      productid: wish.productid,
      item: wish.item,
      price: wish.price,
      user: wish.user,
      image: wish.image,
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
      },
    ]);
  };

  const mapList = cartList.map((cart, index) => {
    const salePrice = (cart) => {
      setPrice(cart.price);
      // (salePrice.reduce((a, v) => (a = a + v.price), 0));
      return;
    };
    console.log(cart.price);

    return (
      <div key={index}>
        <div id="card">
          <div id="cartList">Item Number: {cart.cartid} </div>
          <h3 id="cartList">SKU # {cart.productid} </h3>
          <p id="cartList">Item - {cart.item} </p>
          <p id="cartList">Price ${cart.price}</p>
          <p id="cartList">User {cart.user} </p>
          <p id="countCart">Qty - {cart.count} </p>
          <p id="imageCart">Picture - {`COMING SOON`}</p>
          <p id="subTotal">
            SubTotal - ${parseFloat(cart.price) * parseFloat(cart.count)}
          </p>

          <p id="data"> {data.price} </p>
          <button
            onClick={() => {
              deleteCart(cart.cartid);
            }}
          >
            Remove (-)
          </button>
          <input
            type="number"
            id="updateCount"
            onChange={(e) => {
              setCount(e.target.value);
            }}
          />
          <button
            onClick={() => {
              changeCartQty(cart.cartid, productid, item, price, user, count);
              setPrice(price);
            }}
          >
            Enter Qty.
          </button>
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
    // console.log("AFTER SET Count", cartid, count);
  };

  const deleteCart = (cartid) => {
    Axios.delete(`http://localhost:4001/cart/${cartid}`).then((response) => {
      console.log(response);
      setCartList(cartList.filter((item) => item.cartid !== cartid));
    });
  };

  // const objects = [{ x: 1 }, { x: 2 }, { x: 9 }];
  // const sum = objects.reduce(
  //   (accumulator, currentValue) => accumulator + currentValue.x,
  //   0
  // );
  // console.log(sum);

  // let arrm = Object.entries(mapList);
  // let arrc = Object.entries(cartList);

  // const outputData = JSON.stringify(mapList);
  // // const blob = new Blob([fileData], { type: "text/plain" });
  // // const url = URL.createObjectURL(blob);
  // // const link = document.createElement("a");
  // // link.download = "data.js";
  // // link.href = url;
  // // link.click();

  // const output = (`const data = {
  //   products: ${data} }`);
  // setData(output);
  // console.log(output);

  return (
    <div className="cart">
      <h1 id="productTitle">SHOPPING CART</h1>
      <div>{total}</div>
      <div className="mapList"> {mapList} </div>
      <br />
      <br />
      {}
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default Cart;
