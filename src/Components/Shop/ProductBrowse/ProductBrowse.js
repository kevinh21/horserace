// -- done  -- list items
//add items to cart
//show chart component when items added to cart
//replace button with "In Cart" nav button

import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./ProductBrowse.css";

function ProductList() {
  const [productList, setProductList] = useState([]);
  const [productid, setProductid] = useState("");
  // const [user, setUser] = useState("");
  const [item, setItem] = useState("");
  // const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [count, setCount] = useState(1);
  const [sale, setSale] = useState("");
  // const [updateRecord, setUpdateRecord] = useState("");

  useEffect(() => {
    Axios.get("http://localhost:3001/").then((response) => {
      setProductList(response.data);
    });
  }, []);

  const data = productList.map((product, index) => (
    <div key={index}>
      <div className="cards">
        <h3 id="productData">SKU # {product.productid} </h3>
        <div id="productData">Vendor - {product.vendor} - </div>
        <p id="productData">Item - {product.item} - </p>
        {/* <p id="productData">Description - {product.description}</p> */}
        <p id="productData">{"-IMAGE NOT AVAILABLE-"}</p>
        <p id="productData">Retail - {product.retail} - </p>
        <p id="productData">Sale - ${product.sale}</p>
        <button
          id="button"
          onClick={() => {
            sendToCart(product);
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  ));

  console.log("ProductList-KH", productList);
//NEED TO ADD useEfect and retrieve user table
  const sendToCart = (product, user) => {
    Axios.post("http://localhost:4001/cart", {
      productid: product.productid,
      item: product.item,
      sale: product.sale,
      user: "JACK SMITH",
      image: image,
    });
  };

  return (
    <div className="products">
      <h1 id="productTitle">BROWSE PRODUCTS</h1>
      <div>{data} </div>
    </div>
  );
}
export default ProductList;
