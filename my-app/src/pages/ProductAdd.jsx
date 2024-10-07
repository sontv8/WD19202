import React from "react";

const ProductAdd = (props) => {
  console.log(props);
  const { onHandleChange, onHandleSubmit } = props;

  return (
    <div>
      <h1>Thêm mới sản phẩm</h1>
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
    </div>
  );
};

export default ProductAdd;
