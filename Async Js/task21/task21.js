async function happyMeal() {

  try {
    function orderPizza() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const pizzaDelivered = Math.random() > 0.5;

          if (pizzaDelivered) {
            resolve("Pizza has been delivered!");
          } else {
            reject("Pizza delivery failed.");
          }
        }, 2000);
      });
    }

    function orderDessert() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const dessertDelivered = Math.random() > 0.5;

          if (dessertDelivered) {
            resolve("Dessert has been delivered!");
          } else {
            reject("Dessert delivery failed.");
          }
        }, 1000);
      });
    }

    const pizza=await orderPizza();
    console.log(pizza);
    const dessert=await orderDessert();
    console.log(dessert);

    
  } catch (err) {
    console.log(err);
  }
}

happyMeal();

