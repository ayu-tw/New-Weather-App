function getCurrentCity(response) {
  console.log(response);
}
let apiKey = "05348ae2e09beca97cb2165f14ee5d2b";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Taipei&appid=${apiKey}&units=metric`;
console.log(apiUrl);
axios.get(apiUrl).then(getCurrentCity);
