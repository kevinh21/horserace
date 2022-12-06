import React, { useState, useEffect } from "react";
// import { sqlite3 } from "sqlite3";
import "./Products.css";
// let db = new sqlite3.Database("../db/productrace.sqlite3");

function Products() {
  const [products, setProducts] = useState([false]);
  useEffect(() => {
    getProduct();
  }, []);

  function getProduct() {
    fetch("http://localhost:3001")
      .then((response) => {
        // console.log(response);
        return response.text();
      })
      .then((data) => {
        // console.log(data);

        let parseData = JSON.parse(data);
        // console.log(parseData);
        setProducts(parseData);
      });
  }

  const productList = products.map((myProduct, index) => (
    <ul key={index}>
      <li id="myproductListDataWrapper">
        {/* <hr id="hr" /> */}
        <span id="productDataSKU"> {myProduct.productid}</span>
        <span id="productDataName"> {myProduct.name}</span>
        <span id="productDataItem"> {myProduct.item}</span>
        <span id="productDataDescription">{myProduct.description}</span>
        <span id="productDataRetail"> {myProduct.retail}</span>
        <span id="productDataprice"> {myProduct.price}</span>
      </li>
    </ul>
  ));
  // console.log(productList.productid);
  return (
    <div className="productContainer">
      <div id="productQtyHeader">
        PRODUCT DATA <br /> #{products.length} Listed
        <br />
      </div>
      <div className="productTitleHeaders">
        <span id="productProductSKU">SKU </span>
        <span id="productNameHeader">Name</span>
        <span id="productItemHeader">ITEM </span>
        <span id="productDescriptionHeader">Description</span>
        <span id="productRetailHeader">Retail</span>
        <span id="productPriceHeader">Price</span>
      </div>
      <div id="productDataList">
        <br />
        <br />
        <br />
        <br />
        <br />{" "}
        <div>
          {/* {products ? products : "There is no product data available"} */}
          <br />
          {/* <button onClick={createProduct}>Add product</button> */}
          <br />
          {/* <button onClick={deleteProduct}>Delete product</button> */}
        </div>
        <br />
        <br />
        <br />
        <br />
        {productList}
        HELLO WORLD THIS IS THE END OF THE PRODUCT LIST.
      </div>
    </div>
  );

  // export default Products;

  /* =========================TODO================

API - productModel - configure the node SQL CRUD functions
API - index - configure express to present the CRUD functions 
product.js - get list of items from products
product.js - display list of items 
product.js - add clicked items to cart
cart.js - add math to increment/decrement items
cart.js - total cost of items
submit order and present recipt
add/delete items to wish cart

*/
  function deleteProduct() {
    let productid = prompt("Enter product id to delete");
    fetch(`http://localhost:3001/products/${productid}`, {
      method: "DELETE",
    })
      .then((response) => {
        return response.text();
      })
      .then((data) => {
        alert(data);
        getProduct();
      });
    deleteProduct();

    function createProduct() {
      let name = prompt("Enter product name");
      let email = prompt("Enter product email");
      fetch("http://localhost:3001/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email }),
      })
        .then((response) => {
          return response.text();
        })
        .then((data) => {
          alert(data);
          getProduct();
        });
    }
  }
}

//
export default Products;
