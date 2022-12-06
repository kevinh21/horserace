//must submit to different port for each shotable
import React, { useState, useEffect } from "react";
import Axios from "axios";
// import "./Wish.css";

function Wish() {
  const [wishid, setWishid] = useState("");
  const [productid, setProductid] = useState("");
  const [item, setItem] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [user, setUser] = useState("");
  const [wishList, setWishList] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:5001/wish").then((response) => {
      setWishList(response.data);
    });
  }, []);

  const sendToCart = (cart) => {
    Axios.post("http://localhost:4001/cart", {
      wishid: wishid,
      productid: cart.productid,
      item: cart.item,
      price: cart.price,
      user: cart.user,
      image: cart.image,
    });

    setWishList([
      ...wishList,
      {
        wishid: wishid,
        productid: productid,
        item: item,
        price: price,
        user: user,
        image: image,
      },
    ]);
  };

  const mapList = wishList.map((wish, index) => (
    <div key={index}>
      <div id="card">
        <div id="wishList">Item Number: {wish.wishid} </div>
        <h3 id="wishList">SKU # {wish.productid} </h3>
        <p id="wishList">Item - {wish.item} </p>
        <p id="wishList">Price ${wish.price}</p>
        <p id="wishList">User {wish.user} </p>
        <p id="wishList">Picture - {`COMING SOON`}</p>
        <button
          onClick={() => {
            deleteWish(wish.wishid);
          }}
        >
          Remove (-)
        </button>

        <button
          onClick={() => {
            sendToCart(wish);
            deleteWish(wish.wishid);
          }}
        >
          Add to Cart (+)
        </button>
      </div>
    </div>
  ));

  const deleteWish = (wishid) => {
    Axios.delete(`http://localhost:5001/wish/${wishid}`).then((response) => {
      console.log(response);
      setWishList(wishList.filter((item) => item.wishid !== wishid));
    });
  };

  return (
    <div className="wish">
      <h1 id="productTitle">WISH LIST</h1>

      {/* <button onClick={submitWish}>Check Out</button> */}

      <div className="mapList">{mapList}</div>
    </div>
  );
}

export default Wish;
