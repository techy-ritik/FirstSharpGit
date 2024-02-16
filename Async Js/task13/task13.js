function checkWeather() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let weather;
      if (Math.random() > 0.5) {
        weather = "sunny";
      } else {
        weather = "cloudy";
      }

      if (weather === "sunny") {
        resolve("Let us go for picnic");
      } else if (weather === "cloudy") {
        reject("Error: It is cloudy");
      }
    }, 3000);
  });
}

checkWeather()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
