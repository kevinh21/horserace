// -- done  -- list items
//add items to cart
//show chart component when items added to cart
//replace button with "In Cart" nav button

import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./ProductBrowse.css";

function ProductList() {
  const [productList, setProductList] = useState([]);
  const [image, setImage] = useState("");

  useEffect(() => {
    Axios.get("http://localhost:3001").then((response) => {
      setProductList(response.data);
    });
  }, []);

  const data = productList.map((product, index) => (
    <div key={index}>
      <div className="cards">
        <img id="picture" src={product.image} />
        <h3 id="productData">SKU # {product.productid} </h3>
        <div id="productData">Name - {product.name} - </div>
        <p id="productData">Item - {product.item} - </p>
        <p id="productData">Retail - {product.retail} - </p>
        <p id="productData">Price - ${product.price}</p>
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
      price: product.price,
      user: "JACK SMITH",
      image: image,
    });
  };

  return (
    <div className="browseProductsContainer">
      <h2 id="productTitle">PRODUCTS</h2>
      <div className="browseProductsData">{data} </div>
      {/* <div>{data.productid}</div> */}
    </div>
  );
}
export default ProductList;
