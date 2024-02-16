async function boardingBus() {
  try {
    // Write your code here
    
    function boardBusAt10() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const busArrivesAt10 = Math.random() > 0.5;

          if (busArrivesAt10) {
            resolve("Board the bus");
          } else {
            reject("Error: Bus is late");
          }
        }, 3000);
      });
    }

    const boardBus=await boardBusAt10();
    console.log(boardBus);


  } catch (error) {
    console.log(error);
  }
}

boardingBus();
