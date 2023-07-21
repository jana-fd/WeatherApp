// Get the API key from the OpenWeather website.
/*const apiKey = 'f26bd11d33c1f50cc9473e43365d9d1e';

// Get the city name.
const city = 'Beirut';

// Create the URL for the API request.
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

// Make the API request.
fetch(url)
  .then(response => response.json())
  .then(data => {
    // Get the weather data from the JSON object.
    const temperature = data.main.temp;
    const humidity = data.main.humidity;
    const windSpeed = data.wind.speed;

    // Display the weather data.
    console.log(`
      The current temperature in ${city} is ${temperature} degrees Celsius.
      The humidity is ${humidity} percent.
      The wind speed is ${windSpeed} kilometers per hour.
    `);
  });*/
  let fiveDayForecast;
  const city='Beirut'
  const apiKey = 'f26bd11d33c1f50cc9473e43365d9d1e';
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&days=5&units=metric&appid=${apiKey}`)
    .then(response => response.json())
    .then(data => console.log(data));
