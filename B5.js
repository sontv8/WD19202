/*
    1. import export
    export
    export default
    2. Destructuring Array
    3. Destructuring Object
    4. Spread Operator
    5. Rest Params
*/
// import { myName, addProduct, products } from "./data.js";
// import getData from "./data.js";

// console.log(products);

// addProduct();
// getData();

const myNumber = [1, 2, 3];

const [a, c, b] = myNumber;
console.log(a, b, c);

// const a = myNumber[0];
// const b = myNumber[1];
// const c = myNumber[2];

// const money = a + 100;

// import { products } from "./data.js";
// // console.log(products[0]);

// const [iphone, xiaomi, samsung] = products;
// console.log(iphone);

const iphone = { id: 1, productName: "iphone", price: 100 };

const { id, productName } = iphone;
console.log(id, price, productName);
