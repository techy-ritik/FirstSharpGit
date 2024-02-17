const addItem = document.querySelector("#itemDetails");
const ul = document.querySelector("ul");
const buy1Btn = document.createElement("button");
const buy2Btn = document.createElement("button");
const buy3Btn = document.createElement("button");
api =
  "https://crudcrud.com/api/12b298a304814b51a629e822e3255bd2/InventoryManagement";

addItem.addEventListener("submit", function (event) {
  event.preventDefault();
  const items = {
    itemName: document.getElementById("item").value,
    description: document.getElementById("desc").value,
    price: document.getElementById("price").value,
    quantity: document.getElementById("quant").value,
  };

  axios
    .get(api)
    .then((res) => {
      console.log(res);
      var itemIsNotAvailable = true;
      for (let i = 0; i < res.data.length; i++) {
        if (res.data[i].itemName === items.itemName && res.data[i].description === items.description) {
          itemIsNotAvailable = false;
        }
      }

      if (itemIsNotAvailable) {
        if (
          items.itemName.length != 0 &&
          items.description.length != 0 &&
          items.price.length != 0 &&
          items.quantity.length != 0
        ) {
          axios
            .post(api, items)
            .then((res) => {
              console.log(res);

              const newLi = document.createElement("li");
              newLi.className = "newItem";

              newLi.innerHTML = `${res.data.itemName} - ${res.data.description} - ${res.data.price} - ${res.data.quantity}-`;

              const buy1Btn = document.createElement("button");
              const buy1BtnText = document.createTextNode("Buy 1");
              buy1Btn.appendChild(buy1BtnText);
              buy1Btn.className = "buy-1";
              buy1Btn.addEventListener("click", buy1Item);
              newLi.appendChild(buy1Btn);

              const buy2Btn = document.createElement("button");
              const buy2BtnText = document.createTextNode("Buy 2");
              buy2Btn.appendChild(buy2BtnText);
              buy2Btn.className = "buy-2";
              buy2Btn.addEventListener("click", buy2Item);
              newLi.appendChild(buy2Btn);

              const buy3Btn = document.createElement("button");
              const buy3BtnText = document.createTextNode("Buy 3");
              buy3Btn.appendChild(buy3BtnText);
              buy3Btn.className = "buy-3";
              buy3Btn.addEventListener("click", buy3Item);
              newLi.appendChild(buy3Btn);

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

      for (let i = 0; i < res.data.length; i++) {
        const newLi = document.createElement("li");
        newLi.className = "newItem";

        newLi.innerHTML = `${res.data[i].itemName} - ${res.data[i].description} - ${res.data[i].price} - ${res.data[i].quantity}-`;

        const buy1Btn = document.createElement("button");
        const buy1BtnText = document.createTextNode("Buy 1");
        buy1Btn.appendChild(buy1BtnText);
        buy1Btn.className = "buy-1";
        buy1Btn.addEventListener("click", buy1Item);
        newLi.appendChild(buy1Btn);

        const buy2Btn = document.createElement("button");
        const buy2BtnText = document.createTextNode("Buy 2");
        buy2Btn.appendChild(buy2BtnText);
        buy2Btn.className = "buy-2";
        buy2Btn.addEventListener("click", buy2Item);
        newLi.appendChild(buy2Btn);

        const buy3Btn = document.createElement("button");
        const buy3BtnText = document.createTextNode("Buy 3");
        buy3Btn.appendChild(buy3BtnText);
        buy3Btn.className = "buy-3";
        buy3Btn.addEventListener("click", buy3Item);
        newLi.appendChild(buy3Btn);

        ul.appendChild(newLi);
      }
    })
    .catch((err) => {
      console.log(err);
    });
});

function buy1Item(event) {
  if (event.target.classList.contains("buy-1")) {
    const curentItemDetails = event.target.parentElement;

    const curentItemDetailsContent = curentItemDetails.innerHTML;
    const curentItemDetailsChildValues = curentItemDetailsContent.split("-");

    const updateQuant = {
      itemName: curentItemDetailsChildValues[0].trim(),
      description: curentItemDetailsChildValues[1].trim(),
      price: curentItemDetailsChildValues[2].trim(),
      quantity: curentItemDetailsChildValues[3].trim() - 1,
    };

    console.log(updateQuant.quantity);
    console.log(updateQuant.price);
    axios
      .get(api)
      .then((res) => {
        console.log(res);

        for (let i = 0; i < res.data.length; i++) {
          if (res.data[i].itemName === curentItemDetailsChildValues[0].trim()) {
            var newApi = api + "/" + res.data[i]._id;
            // console.log(newApi);

            axios
              .put(newApi, updateQuant)
              .then((res) => {
                console.log(res);

                axios
                  .get(newApi)
                  .then((res) => {
                    console.log(res);

                    curentItemDetails.innerHTML = `${res.data.itemName} - ${res.data.description} - ${res.data.price} - ${res.data.quantity}-`;

                    const buy1Btn = document.createElement("button");
                    const buy1BtnText = document.createTextNode("Buy 1");
                    buy1Btn.appendChild(buy1BtnText);
                    buy1Btn.className = "buy-1";
                    buy1Btn.addEventListener("click", buy1Item);
                    curentItemDetails.appendChild(buy1Btn);

                    const buy2Btn = document.createElement("button");
                    const buy2BtnText = document.createTextNode("Buy 2");
                    buy2Btn.appendChild(buy2BtnText);
                    buy2Btn.className = "buy-2";
                    buy2Btn.addEventListener("click", buy2Item);
                    curentItemDetails.appendChild(buy2Btn);

                    const buy3Btn = document.createElement("button");
                    const buy3BtnText = document.createTextNode("Buy 3");
                    buy3Btn.appendChild(buy3BtnText);
                    buy3Btn.className = "buy-3";
                    buy3Btn.addEventListener("click", buy3Item);
                    curentItemDetails.appendChild(buy3Btn);
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              })
              .catch((err) => {
                console.log(err);
              });
            console.log(updateQuant.quantity);
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

function buy2Item(event) {
  if (event.target.classList.contains("buy-2")) {
    const curentItemDetails = event.target.parentElement;

    const curentItemDetailsContent = curentItemDetails.innerHTML;
    const curentItemDetailsChildValues = curentItemDetailsContent.split("-");

    const updateQuant = {
      itemName: curentItemDetailsChildValues[0].trim(),
      description: curentItemDetailsChildValues[1].trim(),
      price: curentItemDetailsChildValues[2].trim(),
      quantity: curentItemDetailsChildValues[3].trim() - 2,
    };

    console.log(updateQuant.quantity);
    console.log(updateQuant.price);
    axios
      .get(api)
      .then((res) => {
        console.log(res);

        for (let i = 0; i < res.data.length; i++) {
          if (res.data[i].itemName === curentItemDetailsChildValues[0].trim()) {
            var newApi = api + "/" + res.data[i]._id;

            axios
              .put(newApi, updateQuant)
              .then((res) => {
                console.log(res);

                axios
                  .get(newApi)
                  .then((res) => {
                    console.log(res);

                    curentItemDetails.innerHTML = `${res.data.itemName} - ${res.data.description} - ${res.data.price} - ${res.data.quantity}-`;

                    const buy1Btn = document.createElement("button");
                    const buy1BtnText = document.createTextNode("Buy 1");
                    buy1Btn.appendChild(buy1BtnText);
                    buy1Btn.className = "buy-1";
                    buy1Btn.addEventListener("click", buy1Item);
                    curentItemDetails.appendChild(buy1Btn);

                    const buy2Btn = document.createElement("button");
                    const buy2BtnText = document.createTextNode("Buy 2");
                    buy2Btn.appendChild(buy2BtnText);
                    buy2Btn.className = "buy-2";
                    buy2Btn.addEventListener("click", buy2Item);
                    curentItemDetails.appendChild(buy2Btn);

                    const buy3Btn = document.createElement("button");
                    const buy3BtnText = document.createTextNode("Buy 3");
                    buy3Btn.appendChild(buy3BtnText);
                    buy3Btn.className = "buy-3";
                    buy3Btn.addEventListener("click", buy3Item);
                    curentItemDetails.appendChild(buy3Btn);
                  })
                  .catch((err) => {
                    console.log(err);
                  });
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
  }
}

function buy3Item(event) {
  if (event.target.classList.contains("buy-3")) {
    const curentItemDetails = event.target.parentElement;

    const curentItemDetailsContent = curentItemDetails.innerHTML;
    const curentItemDetailsChildValues = curentItemDetailsContent.split("-");

    const updateQuant = {
      itemName: curentItemDetailsChildValues[0].trim(),
      description: curentItemDetailsChildValues[1].trim(),
      price: curentItemDetailsChildValues[2].trim(),
      quantity: curentItemDetailsChildValues[3].trim() - 3,
    };

    console.log(updateQuant.quantity);
    console.log(updateQuant.price);
    axios
      .get(api)
      .then((res) => {
        console.log(res);

        for (let i = 0; i < res.data.length; i++) {
          if (res.data[i].itemName === curentItemDetailsChildValues[0].trim()) {
            var newApi = api + "/" + res.data[i]._id;

            axios
              .put(newApi, updateQuant)
              .then((res) => {
                console.log(res);

                axios
                  .get(newApi)
                  .then((res) => {
                    console.log(res);

                    curentItemDetails.innerHTML = `${res.data.itemName} - ${res.data.description} - ${res.data.price} - ${res.data.quantity}-`;

                    const buy1Btn = document.createElement("button");
                    const buy1BtnText = document.createTextNode("Buy 1");
                    buy1Btn.appendChild(buy1BtnText);
                    buy1Btn.className = "buy-1";
                    buy1Btn.addEventListener("click", buy1Item);
                    curentItemDetails.appendChild(buy1Btn);

                    const buy2Btn = document.createElement("button");
                    const buy2BtnText = document.createTextNode("Buy 2");
                    buy2Btn.appendChild(buy2BtnText);
                    buy2Btn.className = "buy-2";
                    buy2Btn.addEventListener("click", buy2Item);
                    curentItemDetails.appendChild(buy2Btn);

                    const buy3Btn = document.createElement("button");
                    const buy3BtnText = document.createTextNode("Buy 3");
                    buy3Btn.appendChild(buy3BtnText);
                    buy3Btn.className = "buy-3";
                    buy3Btn.addEventListener("click", buy3Item);
                    curentItemDetails.appendChild(buy3Btn);
                  })
                  .catch((err) => {
                    console.log(err);
                  });
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
  }
}
