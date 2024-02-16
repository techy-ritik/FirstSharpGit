function projectorPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const projectorSet = Math.random() > 0.5;
      if (projectorSet) {
        resolve("Projector rented successfully");
      } else {
        reject("Error: Projectors out of stock");
      }
    }, 1000);
  });
}

function pizzasPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const pizzaOrdered = Math.random() > 0.5;
      if (pizzaOrdered) {
        resolve("Pizzas delivered at time");
      } else {
        reject("Error: Pizzas not delivered on time");
      }
    }, 2000);
  });
}

function friendsPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const friendsArrived = Math.random() > 0.5;
      if (friendsArrived) {
        resolve("Both friends available");
      } else {
        reject("Error: Both friends are not available");
      }
    }, 3000);
  });
}

// projectorPromise()
//   .then((projector) => {
//     console.log(projector);
//     // return pizzasPromise();
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// pizzasPromise()
//   .then((pizza) => {
//     console.log(pizza);
//     // return friendsPromise();
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// friendsPromise()
//   .then((friends) => {
//     console.log(friends);
//   })
//   .catch((err) => {
//     console.log(err);
//   });


Promise.all([projectorPromise(),pizzasPromise(),friendsPromise()])
.then((result)=>{
    console.log(result);
})
.catch((err)=>{
    console.log(err);
})