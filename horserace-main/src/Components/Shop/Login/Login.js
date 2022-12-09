import React from "react";





const Login = () => {
  const [user,setUser] = useState("");
  const [password, setPass] = useState("");
  // const [productList, setProductList] = useState([]);
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





  return <div>LOGIN



    
  </div>;
};

export default Login;
