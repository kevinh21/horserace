import { React, useState, useEffect } from "react";
import Axios from "axios";

function ProductDisplay() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  // useEffect(() => {
  //   return (
  //     <div>
  //       <h2>Products</h2>
  //       <div></div>
  //     </div>

  //   );
  // });
}
export default ProductDisplay;
