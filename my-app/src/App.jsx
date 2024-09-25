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
  return (
    <>
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
              <tr>
                <td>
                  <img src={product.image} alt="" />
                </td>
                <td>{product.name}</td>
                <td>{product.description}</td>
                <td>
                  <button>Xoa</button>
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
