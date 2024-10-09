import React from "react";
import { Link } from "react-router-dom";

const ProductList = (props) => {
  //   console.log("Product List:", props.products);
  const { products, onHandleRemove } = props;
  // console.log(props);

  return (
    <div>
      <h1>Danh sách sản phẩm</h1>
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
                  {/* <a href={`/admin/products/${product.id}/update`}>
                    <button>Cập nhật</button>
                  </a> */}
                  <Link to={`/admin/products/${product.id}/update`}>
                    <button>Cập nhật</button>
                  </Link>
                  <Link to={`/admin/products/${product.id}`}>
                    <button>Chi tiết</button>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
