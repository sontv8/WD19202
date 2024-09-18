/*
1. Object
    - khởi tạo Object
    - Object properties
    - Object method
2. DOM
3. Events
4. Validate
5. import export
    export
    export default

*/
// property name (key) : property value
// const myCar = {
//   name: "Audi",
//   color: "black",
//   start: () => {
//     console.log("Xe dang khoi dong");
//   },
// };

// myCar.start();
// myCar.name = "BMW";
// console.log(myCar);

console.log(document);

document.getElementById("title");
// console.log(document.querySelector("#title"));
// console.log(document.querySelector(".main-title")); // [element1, element2]
console.log(document.querySelector("h2"));

/*
    {
        id: 1,
        name: Product 1,
        price: 1000
    }
    viết 1 hàm sử dụng để hiển thị dữ liệu của sản phẩm.
    Hàm này nhận vào 1 tham số là 1 object chứa dữ liệu của sản phẩm
    Hàm có chức năng hiển thị dữ liệu của sản phẩm ra html theo cấu trúc:
        <div id="product">
            <h2></h2>
            <p></p>
        </div>
*/
// const div = document.querySelector("#product");

// const product = {
//   id: 1,
//   name: "Product 1",
//   price: 1000,
// };
// const showProduct = (obj) => {
//   //   div.innerHTML = "<h2>" + obj.name + "</h2>" + "<p>" + obj.price + "</p>";
//   div.innerHTML = `
//     <h2>${obj.name}</h2>
//     <p>${obj.price}</p>
//     `;
// };

// showProduct(product);

/*
    khai báo 1 mảng chứa dữ liệu của các sản phẩm
    mỗi phần tử trong mảng là 1 sản phẩm (mỗi sản phẩm là 1 object)
    {id: 1,name: Product 1,price: 1000}
    {id: 2,name: Product 2,price: 2000}
    {id: 3,name: Product 3,price: 3000}
    
    viết 1 hàm sử dụng để hiển thị dữ liệu của sản phẩm.
    Hàm này nhận vào 1 tham số là 1 mảng chứa dữ liệu của sản phẩm
    Hàm có chức năng hiển thị dữ liệu của sản phẩm ra html theo cấu trúc:
    mỗi sản phẩm sẽ là 1 div chứa thông tin của sản phẩm như cấu trúc dưới
    <div>
        <h2></h2>
        <p></p>
    </div>

*/
const div = document.querySelector("#product");

const productList = [
  { id: 1, name: "Product 1", price: 1000 },
  { id: 2, name: "Product 2", price: 2000 },
  { id: 3, name: "Product 3", price: 3000 },
];

const showAllProduct = (arr) => {
  for (let item of arr) {
    div.innerHTML += `
    <div>
        <h2>${item.name}</h2>
        <p>${item.price}</p> 
    </div>
    `;
  }
};

showAllProduct(productList);
