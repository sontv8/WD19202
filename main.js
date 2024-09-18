/*
1. Function
    - khởi tạo hàm
        [function] [tên hàm] (tham số){
            khối lệnh
        }
    
    - các kiểu hàm trong js
        - hàm không có tham số, không có giá trị trả về
        - hàm không có tham số, có giá trị trả về
        - hàm có tham số, không có giá trị trả về
    - arrow function ECMA 
    - default params
*/

// function sum() {
//   // ....
// }

// const sum = function () {
//   let a = 10;
//   let b = 20;
//   let ketqua = a + b;
//   return ketqua;
// };

// const tienDanhDe = sum() * 100;
// console.log(tienDanhDe);

/*
    Tham số: giống như biến, được truyền vào hàm khi khởi tạo
*/

// const sum = function (a, b) {
//   let ketqua = a + b;
//   return ketqua;
// };

// console.log(sum(10, 20));
// đối số: là giá trị truyền vào hàm khi gọi hàm ra thực thi

// const sum = function (a, b) {
//   let ketqua = a + b;
//   return ketqua;
// };

// const sum = (a = 10, b = 20) => a + b;

// console.log(sum(100, 50));

/*
2. Array
    - khởi tạo mảng
    - các phương thức xử lý mảng
        cơ bản:
            - length
            - push()
            - pop()
            - join()
            - toString()
            - concat()
            - splice()
            - indexOf()
            - includes()
        nâng cao:
            - map
            - filter
            - find
    - sự khác nhau giữa function và method
*/

const myArr = [1, 2, 3, 4];
// console.log(myArr);
// console.log(myArr.length);

myArr.push(5);
// console.log(myArr);

// myArr.pop();
// console.log(myArr);

// console.log(myArr.join("-"));
// console.log(myArr.toString());

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const vegetable = ["Carrot", "Tomato", "Cucumber"];

// const food = fruits.concat(vegetable);
// console.log(food);

// fruits.splice(1, 2, "Lemon");
// console.log(fruits);

// console.log(fruits.indexOf("Orange"));
// fruits.splice(fruits.indexOf("Orange"), 1);
// console.log(fruits);

// console.log(fruits.includes("abcd"));
// if (!fruits.includes("Banana")) {
//   console.log("Không có chuối");
// } else {
//   console.log("Có chuối");
// }

/*
3. Vòng lặp
    - for
    - foreach
    - for of
*/

const fruits = ["Banana", "Orange", "Apple", "Mango"];

// for (let index = 0; index < fruits.length; index++) {
//   console.log(fruits[index]);
// }

// fruits.forEach((value, index) => {
//   console.log(value);
// });

for (let item of fruits) {
  console.log(item);
}
