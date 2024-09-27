import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const productList = [
  {
    id: 1,
    name: "Product 1",
    image: "https://picsum.photos/200/120",
    description: "Desc 1",
  },
  {
    id: 2,
    name: "Product 2",
    image: "https://picsum.photos/200/120",
    description: "Desc 2",
  },
  {
    id: 3,
    name: "Product 3",
    image: "https://picsum.photos/200/120",
    description: "Desc 3",
  },
];

function App() {
  const [products, setProducts] = useState(productList);
  const [inputValue, setInputValue] = useState({});

  const onHandleRemove = (id) => {
    // [1,2,3,4] => [1,2,3]
    const newProductList = products.filter((item) => {
      return item.id != id;
      //        1        3 -> {SP1}
      //        2        3 -> {SP2}
      //        3        3 -> khong lay ra
    });
    setProducts(newProductList);
  };

  const onHandleChange = (e) => {
    // console.log(e.target.name);
    // console.log(e.target.value);
    const { name, value } = e.target;

    setInputValue({ ...inputValue, [name]: value, id: 4 });

    // setInputValue({ id: 4, name: value });
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    // console.log(inputValue);

    const newData = [...products, inputValue];
    setProducts(newData);
    console.log(newData);
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
