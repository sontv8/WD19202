import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import ProductList from "./pages/ProductList";
import ProductAdd from "./pages/ProductAdd";
import ProductUpdate from "./pages/ProductUpdate";
import ProductDetail from "./pages/ProductDetail";
import { productSchema } from "./schema/Product";

function App() {
  const [products, setProducts] = useState([]);
  const [inputValue, setInputValue] = useState({});
  const [errorList, setErrorList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.log(error));
  }, []);
  const onHandleRemove = (id) => {
    if (confirm("Ban co muon xoa khong?") == true) {
      fetch(`http://localhost:3000/products/${id}`, {
        method: "DELETE",
      });
      const newProductList = products.filter((item) => {
        return item.id != id;
      });
      setProducts(newProductList);
    }
  };

  const onHandleChange = (e) => {
    // e.target.name lấy ra key theo thuộc tính name trong input
    //e.target.value lấy ra giá trị nhập vào ô input
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    // console.log(inputValue);

    const { error } = productSchema.validate(inputValue, { abortEarly: false });
    if (error) {
      setErrorList(error.details);
      return;
    }

    fetch(`http://localhost:3000/products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputValue),
    })
      .then((response) => response.json())
      .then((data) => setProducts([...products, data]))
      .then(() => navigate("/admin/products"));
  };

  const onHandleUpdate = (product) => {
    // console.log("App:", product);

    fetch(`http://localhost:3000/products/${product.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((response) => response.json())
      .then((data) =>
        setProducts(products.map((item) => (item.id == data.id ? data : item)))
      )
      .then(() => navigate("/admin/products"));
  };
  return (
    <>
      {/* 
        B1: tạo form thêm mới
        B2: lấy giá trị nhập vào input trong form
        B3: submit dữ liệu lấy được
        B4: thêm sản phẩm vào mảng products
        B5: hiển thị lại danh sách sản phẩm
      */}

      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/admin" element={<HomePage />} />
        <Route
          path="/admin/products"
          element={
            <ProductList products={products} onHandleRemove={onHandleRemove} />
          }
        />
        <Route
          path="/admin/products/add"
          element={
            <ProductAdd
              onHandleChange={onHandleChange}
              onHandleSubmit={onHandleSubmit}
              errors={errorList}
            />
          }
        />
        <Route
          path="/admin/products/:id/update"
          element={
            <ProductUpdate
              products={products}
              onHandleUpdate={onHandleUpdate}
            />
          }
        />
        <Route
          path="/admin/products/:id"
          element={<ProductDetail products={products} />}
        />
      </Routes>
    </>
  );
}

export default App;
/*
  B1: cài đặt json-server: npm install json-server
  B2: tạo file db.json và thêm dữ liệu vào
  B3: chạy server: npx json-server db.json
  B4: fetch data từ server
  B5: set lại dữ liệu cho products 
*/

/*
  Validate:
    cài đặt thư viện joi: npm i joi
*/
