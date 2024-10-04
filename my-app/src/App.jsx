import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [inputValue, setInputValue] = useState({});

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.log(error));
  });
  const onHandleRemove = (id) => {
    const newProductList = products.filter((item) => {
      return item.id != id;
    });
    setProducts(newProductList);
  };

  const onHandleChange = (e) => {
    // e.target.name lấy ra key theo thuộc tính name trong input
    //e.target.value lấy ra giá trị nhập vào ô input
    // const { name, value } = e.target;
    // setInputValue({ ...inputValue, [name]: value, id: 4 });

    // console.log(e.target.name, e.target.value);
    const { name, value } = e.target;

    setInputValue({ ...inputValue, [name]: value });
    // computed property name
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();

    const newProduct = { id: 4, ...inputValue };
    const newData = [...products, newProduct];
    console.log(newData);
    setProducts(newData);

    // const newData = [...products, inputValue];
    // setProducts(newData);
    // console.log(newData);
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
      {JSON.stringify(inputValue)}

      <form onSubmit={onHandleSubmit}>
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

      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Desc</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
            return (
              <tr key={product.id}>
                <td>
                  <img src={product.image} alt="" />
                </td>
                <td>{product.name}</td>
                <td>{product.description}</td>
                <td>
                  <button onClick={() => onHandleRemove(product.id)}>
                    Xoa
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
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
