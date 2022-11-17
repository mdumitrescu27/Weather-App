const bucuresti = document.querySelector(".bucharest");
const timisoara = document.querySelector(".timisoara");
const oradea = document.querySelector(".oradea");

function updateCityDsiplay(city) {
  const currentCity = document.getElementById("current-city");
  currentCity.innerHTML = city;
}

function updateCity(city) {
  updateCityDsiplay(city);

  localStorage.setItem("city", city);

  displayCurrentWeather(city);
  displayForecastWeather(city);
}

bucuresti.addEventListener("click", function () {
  updateCity("București");
});
timisoara.addEventListener("click", function () {
  updateCity("Timișoara");
});
oradea.addEventListener("click", function () {
  updateCity("Oradea");
});
