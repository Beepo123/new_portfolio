const apiKey = "1541cc2af99034a5ca3ebb18633d5b98";

// display weather info on button click
const buttonElement = document.querySelector(".search-button");
buttonElement.addEventListener("click", async () => {
  const city = readCityInput();
  const API = generateApiUrl(city);

  try {
    const weatherData = await getWeatherData(API);
    renderWeather(weatherData);
  } catch (error) {
    console.log("error connecting to API");
  }
});

async function getWeatherData(API) {
  const response = await fetch(API);
  return await response.json();
}

function readCityInput() {
  const inputElement = document.querySelector(".city-input");
  const city = inputElement.value;
  inputElement.value = "";

  return city;
}

function generateApiUrl(city) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
  return apiUrl;
}

function renderWeather(data) {
  const { name } = data;
  const { humidity } = data.main;
  const { speed } = data.wind;
  const weather = data.weather[0].main.toLowerCase();
  const temp = (data.main.temp - 273.15).toFixed();

  const html = `
    <img src="images/${weather}.png" class="weather-icon" />
    <h1 class="temp">${temp}°c</h1>
    <h2 class="city">${name}</h2>
    <div class="details">
      <div class="col">
        <img src="images/humidity.png">
        <div>
          <p class="humidity">${humidity}%</p>
          <p>Humidity</p>
        </div>
      </div>
      <div class="col">
        <img src="images/${weather}.png" alt="">
        <div>
          <p class="wind">${speed} km/h</p>
          <p>Wind Speed</p>
        </div>
      </div>
    </div>
  `;

  document.querySelector(".weather").innerHTML = html;
}

function onFailure(error) {
  console.log(`error with API request: ${error}`);
}
