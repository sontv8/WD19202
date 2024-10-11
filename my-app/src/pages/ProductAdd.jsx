import React from "react";

const ProductAdd = (props) => {
  // console.log("Product Add: ", props.errors);
  const { onHandleChange, onHandleSubmit, errors } = props;
  const errorDetails = errors.map((item) => {
    return { [item.context.label]: item.message };
  });
  const [errorName, errorImage, errorDescription] = errorDetails;

  return (
    <div>
      <h1>Thêm mới sản phẩm</h1>
      <form onSubmit={onHandleSubmit}>
        <div className="form-group">
          <label htmlFor="">Tên sản phẩm</label>
          <input type="text" name="name" onInput={onHandleChange} />
          <span>{errorName.name}</span>
        </div>
        <div className="form-group">
          <label htmlFor="">Ảnh sản phẩm</label>
          <input type="text" name="image" onInput={onHandleChange} />
          <span>{errorImage.image}</span>
        </div>
        <div className="form-group">
          <label htmlFor="">Mô tả sản phẩm</label>
          <input type="text" name="description" onInput={onHandleChange} />
          <span>{errorDescription.description}</span>
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default ProductAdd;
