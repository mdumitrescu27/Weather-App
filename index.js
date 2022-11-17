let currentCity = localStorage.getItem("city");

if (!currentCity) {
  currentCity = "București";
  localStorage.setItem("city", currentCity);
}
updateCityDsiplay(currentCity);

displayCurrentWeather(currentCity);
