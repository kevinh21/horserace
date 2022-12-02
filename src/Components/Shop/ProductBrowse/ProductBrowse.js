// -- done  -- list items
//add items to cart
//show chart component when items added to cart
//replace button with "In Cart" nav button

import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./ProductBrowse.css";

function ProductList() {
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:3001/").then((response) => {
      setProductList(response.data);
    });
  }, []);

  const data = productList.map((product, index) => (
    <div key={index}>
      <div className="cards">
        <div id="productData">Item Number: {product.productid} </div>
        {/* <h3 id="productData">{product.vendor} - </h3> */}
        <p id="productData">{product.item} - </p>
        {/* <p id="productData"> {product.description}</p> */}
        <p id="productData">{"-IMAGE NOT AVAILABLE-"}</p>
        <p id="productData">{product.retail} - </p>
        <p id="productData">{product.sale}</p>
        {/* //////////ADD TO CART BUTTON//////////////// */}
        <button
          onClick={() => {
            deleteProduct(product.productid);
          }}
        >
          Delete
        </button>
        {/* /////////////////////////////////////// */}
        <button
          onClick={() => {
            deleteProduct(product.productid);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  ));
  console.log(data);
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
  

  return <div className="products">{data}</div>;
}

export default ProductList;
