import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const ProductUpdate = ({ products, onHandleUpdate }) => {
  const [inputValue, setInputValue] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();
  const currentProduct = products.find((item) => item.id == id);
  //   console.log(currentProduct);

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };
  const onUpdate = (e) => {
    e.preventDefault();
    const updateData = { ...currentProduct, ...inputValue };
    onHandleUpdate(updateData);
  };
  return (
    <div>
      <h1>Cập nhật sản phẩm</h1>
      <form onSubmit={onUpdate}>
        <div className="form-group">
          <label htmlFor="">Tên sản phẩm</label>
          <input
            type="text"
            name="name"
            onInput={onHandleChange}
            defaultValue={currentProduct.name}
          />
        </div>
        <div className="form-group">
          <label htmlFor="">Ảnh sản phẩm</label>
          <input
            type="text"
            name="image"
            onInput={onHandleChange}
            defaultValue={currentProduct.image}
          />
        </div>
        <div className="form-group">
          <label htmlFor="">Mô tả sản phẩm</label>
          <input
            type="text"
            name="description"
            onInput={onHandleChange}
            defaultValue={currentProduct.description}
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default ProductUpdate;
