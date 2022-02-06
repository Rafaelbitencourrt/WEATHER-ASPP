let weather = {
  apiKey: "53de8758770c4f74c302a0a05a8cd1f1",
  fecthWeather: function () {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&appid=" +
        apiKey
    )
      .then((response) => response.json())
      .then((data) => console.log(data));
  },
};
