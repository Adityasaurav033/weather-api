const apikey = "6e0894d0e5c1d2c89e1fcfc39e276f69";
const url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const cardBack = document.querySelector(".card");

async function checkWeather(city) {
  const response = await fetch(url + city + `&appid=${apikey}`);
  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    var data = await response.json();
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.floor(data.main.temp) + `°C`;
    document.querySelector(".humidity").innerHTML = data.main.humidity + `%`;
    document.querySelector(".wind").innerHTML = data.wind.speed + `Km/hr`;

    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "img/clouds.png";
      cardBack.style.background =
        "linear-gradient(to bottom, #d3d3d3, #a9b2b9)";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "img/clear.png";
      cardBack.style.background =
        "linear-gradient(to bottom, #87ceeb, #1e90ff)";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "img/drizzle.png";
      cardBack.style.background =
        "linear-gradient(to bottom, #b0c4de, #7a9cb5)";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "img/mist.png";
      cardBack.style.background =
        "linear-gradient(to bottom, #b0c4de, #a9a9a9)";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "img/rain.png";
      cardBack.style.background =
        "linear-gradient(to bottom, #4a4e69, #6b7280)";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
