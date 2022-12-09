//must submit to different port for each shotable
import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./WishList.css";
import "../ProductBrowse/ProductBrowse.css";

function Wish() {
  const [wishid, setWishid] = useState("");
  const [productid, setProductid] = useState("");
  const [item, setItem] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [user, setUser] = useState("");
  const [count, setCount] = useState("");
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
      count: cart.count,
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
        count: count,
      },
    ]);
  };

  const mapList = wishList.map((wish, index) => (
    <div key={index}>
      <div className="wishCards">
        <img id="picture" alt="wishPic" src={wish.image} />
        {/* <div id="wishData">Item Number: {wish.wishid} </div> */}
        <h3 id="wishData">SKU # {wish.productid} </h3>
        <p id="wishData">Item - {wish.item} </p>
        <p id="wishData">Price - ${wish.price}</p>
        {/* <p id="wishData">Count - {wish.count}</p> */}
        {/* <p id="wishData">User - {wish.user} </p> */}
        <div className="mapWrapper"></div>
        <button
          id="wishButton"
          onClick={() => {
            deleteWish(wish.wishid);
          }}
        >
          Remove (-)
        </button>

        <button
          id="wishButton"
          onClick={() => {
            sendToCart(wish);
            deleteWish(wish.wishid);
          }}
        >
          Return to Cart (+)
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
    <div className="wishContainer">
      <h1 id="wishTitle">WISH LIST</h1>
      <div className="mapList">{mapList}</div>
    </div>
  );
}

export default Wish;
