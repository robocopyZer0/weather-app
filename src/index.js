import css from './style.css';
import { createDom } from './dom';
const API = '746149ecb44c6b9cbab720bddd6eeee5';
const container = document.getElementById('container');
createDom();
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');

searchInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    searchButton.click();
  }
});

async function getWeatherData(city) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&exclude=daily&APPID=${API}&units=metric`,
      { mode: 'cors' }
    );
    const weatherData = await response.json();
    return weatherData;
  } catch {
    console.log('ERROR');
  }
}
async function getOnecallWeatherData(lat, lon) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=minutely&appid=${API}`,
      { mode: 'cors' }
    );
    const weatherData = await response.json();
    return weatherData;
  } catch {
    console.log('ERROR');
  }
}
class Weather {
  constructor(currentTemp, currentHumidity, currentTime, hourly, daily) {
    this.currentTemp = currentTemp;
    this.currentHumidity = currentHumidity;
    this.currentTime = currentTime;
    this.hourly = hourly;
    this.daily = daily;
  }
}
async function processWeatherData(city) {
  try {
    const weatherData = await getWeatherData(city);
    const onecallRequest = await getOnecallWeatherData(
      weatherData.coord.lat,
      weatherData.coord.lon
    );
    const weather = new Weather(
      onecallRequest.current.temp,
      onecallRequest.current.humidity,
      onecallRequest.current.dt,
      onecallRequest.hourly,
      onecallRequest.daily
    );
    setHeaderIcon(weatherData);
    setBackground(weatherData);
    setCurrentWeather(weatherData, weatherData.name);
    setHourlyWeatherTemperature(weather);
    setHourlyWeatherTime(weather);
    setHourlyWeatherIcon(weather);
    setHourlyWeatherHumidity(weather);
    setDailyWeatherTemperature(weather);
    setDailyWeatherDay(weather);
    setDailyWeatherHumidity(weather);
    setDailyWeatherIcon(weather);
  } catch {
    console.log('processWeatherData Error!');
  }
}

function setCurrentWeather(weather, currentCity) {
  const city = document.getElementById('city');
  const currentTemperature = document.getElementById('current-temperature');
  const currentForecast = document.getElementById('current-forecast');
  city.textContent = currentCity;

  currentForecast.textContent = weather.weather[0].main;
  currentTemperature.textContent = Math.round(weather.main.temp) + '°';
}

function setBackground(weatherData) {
  if (weatherData.weather[0].main === 'Clouds') {
    document.body.style.backgroundImage = 'linear-gradient(#797C87, #ACB7BD)';
  } else if (weatherData.weather[0].main === 'Clear') {
    document.body.style.backgroundImage = 'linear-gradient(#51A4DB, #73BAE1)';
  } else if (weatherData.weather[0].main === 'Snow') {
    document.body.style.backgroundImage = 'linear-gradient(#9598a1, #ACB7BD)';
  } else if (weatherData.weather[0].main === 'Rain') {
    document.body.style.backgroundImage = 'linear-gradient(#7497AB, #4F718A)';
  } else {
    document.body.style.backgroundImage = 'linear-gradient(#7497AB, #4F718A)';
  }
}
function setHeaderIcon(weatherData) {
  const headerIcon = document.getElementById('header-icon');
  const icon = weatherData.weather[0].icon;
  headerIcon.src = `https://openweathermap.org/img/wn/${icon}.png`;
}
searchButton.addEventListener('click', () => {
  const form = document.getElementById('form');
  processWeatherData(searchInput.value);
  form.reset();
});

function setHourlyWeatherTemperature(weather) {
  let counter = 0;

  const hourlyWeatherTemperature = document.querySelectorAll(
    '.hourly-weather-temperature'
  );
  hourlyWeatherTemperature.forEach((element) => {
    element.textContent = Math.round(weather.hourly[counter].temp) + '°';
    counter++;
  });
}

function setHourlyWeatherTime(weather) {
  let counter = 0;

  const hourlyWeatherTime = document.querySelectorAll('.hourly-weather-time');
  hourlyWeatherTime.forEach((element) => {
    element.textContent = convertUnixTime(weather.hourly[counter].dt);

    counter++;
  });
}

function setHourlyWeatherIcon(weather) {
  let counter = 0;

  const hourlyWeatherIcon = document.querySelectorAll('.hourly-weather-icon');
  hourlyWeatherIcon.forEach((element) => {
    const icon = weather.hourly[counter].weather[0].icon;
    element.src = `https://openweathermap.org/img/wn/${icon}.png`;
    counter++;
  });
}
function setHourlyWeatherHumidity(weather) {
  let counter = 0;

  const hourlyWeatherHumidity = document.querySelectorAll(
    '.hourly-weather-humidity'
  );
  hourlyWeatherHumidity.forEach((element) => {
    element.textContent = weather.hourly[counter].humidity + '%';
    counter++;
  });
}
function convertUnixTime(time) {
  const unixTime = time;
  const date = new Date(unixTime * 1000);
  return date.toLocaleString('en-US', { hour: 'numeric', hour12: true });
}
function convertUnixDate(time) {
  const unixTime = time;
  const date = new Date(unixTime * 1000);
  const options = { weekday: 'long' };
  return new Intl.DateTimeFormat('en-US', options).format(date);
}

function setDailyWeatherDay(weather) {
  const dailyWeatherDay = document.querySelectorAll('.daily-weather-day');
  let counter = 0;
  dailyWeatherDay.forEach((element) => {
    element.textContent = convertUnixDate(weather.daily[counter].dt);
    counter++;
  });
}

function setDailyWeatherHumidity(weather) {
  const dailyWeatherHumidity = document.querySelectorAll(
    '.daily-weather-humidity'
  );
  let counter = 0;
  dailyWeatherHumidity.forEach((element) => {
    element.textContent = weather.daily[counter].humidity + '%';
    counter++;
  });
}

function setDailyWeatherIcon(weather) {
  const dailyWeatherIcon = document.querySelectorAll('.daily-weather-icon');
  let counter = 0;
  dailyWeatherIcon.forEach((element) => {
    const icon = weather.daily[counter].weather[0].icon;
    element.src = `https://openweathermap.org/img/wn/${icon}.png`;
    counter++;
  });
}

function setDailyWeatherTemperature(weather) {
  const dailyWeatherTemperature = document.querySelectorAll(
    '.daily-weather-temperature'
  );
  let counter = 0;
  dailyWeatherTemperature.forEach((element) => {
    element.textContent = Math.round(weather.daily[counter].temp.day) + '°';
    counter++;
  });
}

processWeatherData('London');
