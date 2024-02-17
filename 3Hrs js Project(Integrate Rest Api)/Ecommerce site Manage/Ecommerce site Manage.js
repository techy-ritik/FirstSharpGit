const addItem = document.querySelector("#productDetails");
const ul = document.querySelector("ul");
const h3 = document.querySelector("h3");
const deleteBtn = document.createElement("button");

api =
  "https://crudcrud.com/api/8eb1d7ac7fdd41bcb8749009f1631986/ecommerceManagement";

addItem.addEventListener("submit", function (event) {
  event.preventDefault();
  let newTotalPrice = 0;
  const products = {
    productName: document.getElementById("product").value,
    price: document.getElementById("price").value,
  };

  axios
    .get(api)
    .then((res) => {
      console.log(res);

      var productIsNotAvailable = true;
      for (let i = 0; i < res.data.length; i++) {
        newTotalPrice += parseInt(res.data[i].price);
        if (res.data[i].productName === products.productName) {
          productIsNotAvailable = false;
        }
      }

      if (productIsNotAvailable) {
        if (products.productName.length != 0 && products.price.length != 0) {
          axios
            .post(api, products)
            .then((res) => {
              console.log(res);

              newTotalPrice += parseInt(res.data.price);

              h3.innerHTML = `Total Value Worth of Products:- ${newTotalPrice} `;

              const newLi = document.createElement("li");
              newLi.className = "newProduct";

              newLi.innerHTML = `${res.data.productName} - ${res.data.price}-`;

              const deleteBtn = document.createElement("button");
              const deleteBtnText = document.createTextNode("Delete Product");
              deleteBtn.appendChild(deleteBtnText);
              deleteBtn.className = "delete-btn";
              deleteBtn.addEventListener("click", deleteProduct);
              newLi.appendChild(deleteBtn);

              ul.appendChild(newLi);
            })
            .catch((err) => {
              console.log(err);
            });
        }
      }
    })
    .catch((err) => {
      console.log(err);
    });
});

const showItems = document.querySelector("#show");

showItems.addEventListener("click", function (event) {
  event.preventDefault();

  axios
    .get(api)
    .then((res) => {
      console.log(res);

      let totalPrice = 0;

      for (let i = 0; i < res.data.length; i++) {
        totalPrice += parseInt(res.data[i].price);

        const newLi = document.createElement("li");
        newLi.className = "newProduct";

        newLi.innerHTML = `${res.data[i].productName} - ${res.data[i].price}-`;

        const deleteBtn = document.createElement("button");
        const deleteBtnText = document.createTextNode("Delete Product");
        deleteBtn.appendChild(deleteBtnText);
        deleteBtn.className = "delete-btn";
        deleteBtn.addEventListener("click", deleteProduct);
        newLi.appendChild(deleteBtn);

        ul.appendChild(newLi);
      }

      h3.innerHTML = `Total Value Worth of Products:- ${totalPrice} `;
    })
    .catch((err) => {
      console.log(err);
    });
});

function deleteProduct(event) {
  if (event.target.classList.contains("delete-btn")) {
    let newTotalPrice = 0;

    const curentProductDetails = event.target.parentElement;

    const curentProductDetailsContent = curentProductDetails.innerHTML;
    const curentProductDetailsChildValues =
      curentProductDetailsContent.split("-");

    axios
      .get(api)
      .then((res) => {
        console.log(res);

        for (let i = 0; i < res.data.length; i++) {
          newTotalPrice += parseInt(res.data[i].price);
        }
        for (let i = 0; i < res.data.length; i++) {
          if (
            res.data[i].productName ===
            curentProductDetailsChildValues[0].trim()
          ) {
            var newApi = api + "/" + res.data[i]._id;

            newTotalPrice = newTotalPrice - parseInt(res.data[i].price);

            h3.innerHTML = `Total Value Worth of Products:- ${newTotalPrice} `;

            

            axios
              .delete(newApi)
              .then((res) => {
                console.log(res);
              })
              .catch((err) => {
                console.log(err);
              });
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
      ul.removeChild(curentProductDetails);
  }
}
