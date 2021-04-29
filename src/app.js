function updateCurrentInfo(response) {
  let cityName = document.querySelector("#selected-city");
  cityName.innerHTML = `${response.data.name}`;
  let description = document.querySelector("#local-weather-description");
  description.innerHTML = `${response.data.weather[0].description}`;
  let temp = document.querySelector("#current-temp");
  temp.innerHTML = `${response.data.main.temp}`;
  let humidity = document.querySelector("#humidity");
  humidity.innerHTML = `${response.data.main.humidity}%`;
  let wind = document.querySelector("#wind");
  let windSpeed = Math.round(response.data.wind.speed);
  wind.innerHTML = `${windSpeed} km/h`;
  let visibility = document.querySelector("#visibility");
  visibility.innerHTML = `${response.data.visibility}`;
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
