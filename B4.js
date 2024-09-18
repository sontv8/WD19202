const products = [
  {
    id: 1,
    name: "Product 1",
    price: 1000,
    image: "https://picsum.photos/200/120 ",
  },
  {
    id: 2,
    name: "Product 2",
    price: 2000,
    image: "https://picsum.photos/200/120 ",
  },
  {
    id: 3,
    name: "Product 3",
    price: 3000,
    image: "https://picsum.photos/200/120 ",
  },
];

const showProduct = (data) => {
  const tbody = document.querySelector("#product");
  tbody.innerHTML = "";
  for (let item of data) {
    tbody.innerHTML += `
        <tr>
            <td>${item.name}</td>
            <td>${item.price}</td>
            <td><img src=${item.image}></td>
            <td>
                <button class="btn-delete" data-id=${item.id}>Delete</button>
            </td>
        </tr>
    `;
  }
  const btnDeletes = document.querySelectorAll(".btn-delete");
  for (let btn of btnDeletes) {
    // btn.onclick = () => {}
    btn.addEventListener("click", () => {
      const id = btn.dataset.id;
      console.log(id);
      const newData = products.filter((product) => {
        return product.id != id;
      });
      console.log("Old Data", products);
      console.log("New Data", newData);
      showProduct(newData);
    });
  }
};
showProduct(products);

/*
Vòng lặp thứ 1:
    {
    id: 1,
    name: "Product 1",
    price: 1000,
    image: "https://picsum.photos/200/120 ",
  }
Vòng lặp thứ 2:
  {
    id: 2,
    name: "Product 2",
    price: 2000,
    image: "https://picsum.photos/200/120 ",
  }

Vòng lặp thứ 3:
  {
    id: 3,
    name: "Product 3",
    price: 3000,
    image: "https://picsum.photos/200/120 ",
  },
*/
