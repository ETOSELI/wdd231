const apiKey = "cc26d941ebb9e8854453efacf61a6930"; // Replace with your API key
const weatherContainer = document.getElementById("weather-info");

// Fetch weather data using the user's current location
function fetchWeatherData() {
    const latitude = -1.2872; // Nairobi latitude
    const longitude = 36.8083; // Nairobi longitude

    const weatherApiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`;

    fetch(weatherApiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error("Weather data could not be retrieved.");
            }
            return response.json();
        })
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.error("Error fetching weather data:", error);
            weatherContainer.innerHTML = "<p>Unable to fetch weather data. Please try again later.</p>";
        });
}

// Display the weather data in the container
function displayWeather(data) {
    const currentWeather = data.list[0]; // Current weather
    const forecast = data.list.slice(1, 4); // Next 3 forecasts

    // Current weather
    const currentWeatherHtml = `
        <p><strong>Temperature:</strong> ${currentWeather.main.temp.toFixed(0)}°C</p>
        <p><strong>Condition:</strong> ${capitalizeWords(currentWeather.weather[0].description)}</p>
    `;

    // Forecast
    const forecastHtml = forecast.map((item, index) => `
        <p><strong>Day ${index + 1}:</strong> ${item.main.temp.toFixed(0)}°C, ${capitalizeWords(item.weather[0].description)}</p>
    `).join("");

    // Combine current weather and forecast into the container
    weatherContainer.innerHTML = `
        <div class="current-weather">
            <h3>Today's Weather</h3>
            ${currentWeatherHtml}
        </div>
        <div class="forecast">
            <h3>3-Day Forecast</h3>
            ${forecastHtml}
        </div>
    `;
}

// Capitalize the first letter of each word
function capitalizeWords(str) {
    return str.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
}

document.addEventListener("DOMContentLoaded", fetchWeatherData);
