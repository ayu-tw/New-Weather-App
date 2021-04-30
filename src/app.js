function formatDate(timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];

  return `${day} ${hours}:${minutes}`;
}

function sunUpDown(timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }

  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return `${hours}:${minutes}`;
}

function updateCurrentInfo(response) {
  let cityName = document.querySelector("#selected-city");
  cityName.innerHTML = `${response.data.name}`;
  let description = document.querySelector("#local-weather-description");
  description.innerHTML = `${response.data.weather[0].description}`;
  let temp = document.querySelector("#current-temp");
  let temperature = Math.round(response.data.main.temp);
  temp.innerHTML = `${temperature}`;
  let humidity = document.querySelector("#humidity-value");
  humidity.innerHTML = `${response.data.main.humidity}%`;
  let wind = document.querySelector("#wind-speed");
  let windSpeed = Math.round(response.data.wind.speed);
  wind.innerHTML = `${windSpeed} km/h`;
  let localTime = document.querySelector("#local-time");
  localTime.innerHTML = formatDate(response.data.dt * 1000);
  let sunriseTime = document.querySelector("#sunrise-time");
  sunriseTime.innerHTML = sunUpDown(response.data.sys.sunrise * 1000);
  let sunsetTime = document.querySelector("#sunset-time");
  sunsetTime.innerHTML = sunUpDown(response.data.sys.sunset * 1000);
}

function defaultPage(event) {
  event.preventDefault();
  let city = document.querySelector("#search-input").value;
  city = city.trim();
  let apiKey = "05348ae2e09beca97cb2165f14ee5d2b";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(updateCurrentInfo);
}

let search = document.querySelector("#submit-button");
search.addEventListener("click", defaultPage);
