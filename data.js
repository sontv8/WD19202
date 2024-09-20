const myName = "sontv";

const addProduct = () => {
  console.log("Them san pham thanh cong");
};

const products = [
  { id: 1, name: "iphone", price: 100 },
  { id: 2, name: "xiaomi", price: 100 },
  { id: 3, name: "samsung", price: 100 },
];

const getData = () => {
  console.log("Lay du lieu thanh cong");
};

export { myName, addProduct, products };

export default getData;
