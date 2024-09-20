/*
    1. import export
    export
    export default
    2. Destructuring Array
    3. Destructuring Object
    4. Spread Operator ...
    5. Rest Params ...
*/
// import { myName, addProduct, products } from "./data.js";
// import getData from "./data.js";

// console.log(products);

// addProduct();
// getData();

// const myNumber = [1, 2, 3];

// const [a, c, b] = myNumber;
// console.log(a, b, c);

// const a = myNumber[0];
// const b = myNumber[1];
// const c = myNumber[2];

// const money = a + 100;

// import { products } from "./data.js";
// // console.log(products[0]);

// const [iphone, xiaomi, samsung] = products;
// console.log(iphone);

// const iphone = { id: 1, productName: "iphone", price: 100 };

// const { id, productName } = iphone;
// console.log(id, price, productName);

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const vegetable = ["Carrot", "Tomato", "Cucumber"];

// // const newArr = fruits.concat(vegetable);
// const newArr = [...fruits, ...vegetable];
// console.log(newArr);

// const newFruits = [...fruits, "abcd", "hhhh"];
// // const newFruits = fruits;
// console.log(newFruits);

// const sum = (...rest) => {
//   console.log(rest);
// };
// sum(1, 2, 3);

// const info = {
//   id: 1,
//   title: "Tieu de 1",
//   author: "sontv",
//   desc: "description",
// };

// const { id, desc, ...other } = info;
// console.log("id:", id);
// console.log("other:", other);

const data = [
  {
    id: 1,
    title: "Tieu de 1",
    author: "sontv",
    desc: "description",
  },
  {
    id: 2,
    title: "Tieu de 2",
    author: "datlt",
    desc: "description 2",
  },
];

const [sontv, datlt] = data;
const { id, title } = sontv;
console.log(id, title);
