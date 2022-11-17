const APPID = "904af63a188b59879b07cc2c167afc63";

function getCurrentWeatherEndpoint(city) {
  return `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=ro&appid=${APPID}`;
}

function getForecastEndpoint(city) {
  return `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&lang=ro&appid=${APPID}`;
}
