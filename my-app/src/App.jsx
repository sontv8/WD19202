import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import ProductList from "./pages/ProductList";

function App() {
  const [products, setProducts] = useState([]);
  // const [inputValue, setInputValue] = useState({});

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

  // const onHandleChange = (e) => {
  //   // e.target.name lấy ra key theo thuộc tính name trong input
  //   //e.target.value lấy ra giá trị nhập vào ô input
  //   const { name, value } = e.target;
  //   setInputValue({ ...inputValue, [name]: value });
  // };

  // const onHandleSubmit = (e) => {
  //   e.preventDefault();
  //   // console.log(inputValue);

  //   fetch(`http://localhost:3000/products`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(inputValue),
  //   })
  //     .then((response) => response.json())
  //     .then((data) => setProducts([...products, data]));
  // };

  return (
    <>
      {/* 
        B1: tạo form thêm mới
        B2: lấy giá trị nhập vào input trong form
        B3: submit dữ liệu lấy được
        B4: thêm sản phẩm vào mảng products
        B5: hiển thị lại danh sách sản phẩm
      */}

      {/* <form onSubmit={onHandleSubmit}>
        <div className="form-group">
          <label htmlFor="">Tên sản phẩm</label>
          <input type="text" name="name" onInput={onHandleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="">Ảnh sản phẩm</label>
          <input type="text" name="image" onInput={onHandleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="">Mô tả sản phẩm</label>
          <input type="text" name="description" onInput={onHandleChange} />
        </div>
        <button>Submit</button>
      </form>

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
