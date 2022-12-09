import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./ProductManagement.css";
// import "../cart/beadedTack.jfif";

function ProductManagement() {
  const [productid, setProductid] = useState("");
  const [name, setName] = useState("");
  const [item, setItem] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [retail, setRetail] = useState("");
  const [price, setPrice] = useState("");
  const [productList, setProductList] = useState([]);
  const [updateRecord, setUpdateRecord] = useState("");

  useEffect(() => {
    Axios.get("http://localhost:3001/").then((response) => {
      setProductList(response.data);
    });
  }, []);

  const submitProduct = () => {
    Axios.post("http://localhost:3001/products", {
      productid: productid,
      name: name,
      item: item,
      description: description,
      image: image,
      retail: retail,
      price: price,
    });
    console.log(productid, setProductid);

    setProductList([
      ...productList,
      {
        productid: productid,
        name: name,
        item: item,
        description: description,
        image: image,
        retail: retail,
        price: price,
      },
    ]);
    // submitProduct("");
  };

  const mapList = productList.map((product, index) => (
    <div key={index}>
      <div id="card">
        <img id="picture" alt="cartPic" src={product.image} />
        <div id="productList">Item Number: {product.productid} </div>
        <h3 id="productList">Name - {product.name} </h3>
        <p id="productList">Item - {product.item} </p>
        <p id="productList">Desc. - {product.description} - </p>
        <p id="productList">Retail - {product.retail} </p>
        <p id="productList">Price - {product.price}</p>
        <button
          onClick={() => {
            deleteProduct(product.productid);
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
        {/* 
<ul id="list"></ul>
  <form id="new-record-form">
    <label for="new-record-item">New Item</label>
    <input type="text" id="new-task-title" name="new-task-title">
    <label for="name">Name</label>
    <input type="text" id="name" name="name">
    <button type="submit">Add</button>
  </form> */}
        <button
          onClick={() => {
            updateProduct(product.productid, updateRecord);
          }}
        >
          Change Price $$
        </button>
      </div>
    </div>
  ));
  // console.log(mapList);
  console.log("Kevin", updateRecord);

  const updateProduct = (productid, price) => {
    Axios.put("http://localhost:3001/products", {
      productid: productid,
      // name: name,
      // item: item,
      // description: description,
      // retail: retail,
      price: price,
    });
    setUpdateRecord("");
  };

  // const deleteProduct = (productid) => {
  //   Axios.delete(`http://localhost:3001/products/${productid}`);
  // };

  const deleteProduct = (productid) => {
    Axios.delete(`http://localhost:3001/products/${productid}`).then(
      (response) => {
        console.log(response);
        setProductList(
          productList.filter((item) => item.productid !== productid)
        );
      }
    );
  };

  return (
    <div className="products">
      <h1 id="productTitle">PRODUCT MANAGEMENT</h1>
      <div className="form">
        <label>Name</label>
        <input
          type="text"
          name="name"
          onChange={(e) => {
            setName(e.target.value);
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
        <label>Description</label>
        <input
          type="text"
          name="description"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />

        <label>Image</label>
        <input
          type="file"
          name="file"
          onChange={(e) => {
            setImage(e.target.value);
          }}
        />

        <label>Retail</label>
        <input
          type="text"
          name="retail"
          onChange={(e) => {
            setRetail(e.target.value);
          }}
        />
        <label>Price</label>
        <input
          type="text"
          name="price"
          onChange={(e) => {
            setPrice(e.target.value);
          }}
        />
        
        <button onClick={submitProduct}>Submit</button>

        <div className="mapList">{mapList}</div>
      </div>
    </div>
  );
}

export default ProductManagement;
