//must submit to different port for each table
import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./WishList.css";

function Wish() {
  const [wishid, setWishid] = useState("");
  const [productid, setProductid] = useState("");
  const [item, setItem] = useState("");
  // const [image, setImage] = useState("");
  const [sale, setSale] = useState("");
  const [user, setUser] = useState("");
  // const [count, setCount] = useState("");
  const [wishList, setWishList] = useState([]);
  const [updateRecord, setUpdateRecord] = useState("");

  useEffect(() => {
    Axios.get("http://localhost:5001/wish").then((response) => {
      setWishList(response.data);
    });
  }, []);

  const submitWish = () => {
    Axios.post("http://localhost:5001/wish", {
      wishid: wishid,
      productid: productid,
      item: item,
      user: user,
      // image: image,
      // count: count,
      sale: sale,
    });
    console.log(wishid, setWishid);

    setWishList([
      ...wishList,
      {
        wishid: wishid,
        productid: productid,
        item: item,
        user: user,
        // image: image,
        // count: count,
        sale: sale,
      },
    ]);
    // submitWish("");
  };

  const mapList = wishList.map((wish, index) => (
    <div key={index}>
      <div id="card">
        <div id="wishList">Item Number: {wish.wishid} </div>
        <h3 id="wishList">{wish.productid} - </h3>
        <p id="wishList">{wish.item} - </p>
        <p id="wishList">{wish.user} - </p>
        <p id="wishList">{`COMING SOON`} - </p>
        {/* <p id="wishList">{wish.count} - </p> */}
        <p id="wishList">{wish.sale}</p>
        <button
          onClick={() => {
            deleteWish(wish.wishid);
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
            updateWish(wish.wishid, updateRecord);
          }}
        >
          Change Sale $$
        </button>
      </div>
    </div>
  ));
  console.log(updateRecord);

  const updateWish = (wishid, sale) => {
    Axios.put("http://localhost:5001/wish", {
      wishid: wishid,
      // productid: productid,
      // item: item,
      // user: user,
      // count: count,
      sale: sale,
    });
    setUpdateRecord("");
  };

  // const deleteWish = (wishid) => {
  //   Axios.delete(`http://localhost:5001/wish/${wishid}`);
  // };

  const deleteWish = (wishid) => {
    Axios.delete(`http://localhost:5001/wish/${wishid}`).then((response) => {
      console.log(response);
      setWishList(wishList.filter((item) => item.wishid !== wishid));
    });
  };

  return (
    <div className="wish">
      <h1 id="productTitle">WISH LIST</h1>
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

        <label>Sale</label>
        <input
          type="text"
          name="sale"
          onChange={(e) => {
            setSale(e.target.value);
          }}
        />
        <button onClick={submitWish}>Submit</button>

        <div className="mapList">{mapList}</div>
      </div>
    </div>
  );
}

export default Wish;
