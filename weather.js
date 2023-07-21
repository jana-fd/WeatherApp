

// Make the API request.
function Fetch1(){
// Get the API key from the OpenWeather website.
const apiKey = 'f26bd11d33c1f50cc9473e43365d9d1e';

// Get the city name.
var city = document.getElementById('search_weather').value;

// Create the URL for the API request.
var url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

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
    document.getElementById("display_output").innerHTML=temperature+"\n"+humidity+"\n"+windSpeed
  });
}

/*let data1=document.getElementById('display_output')  
let button=document.getElementById('search_button')
  const city='Beirut'
  const apiKey = 'f26bd11d33c1f50cc9473e43365d9d1e';
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&days=5&units=metric&appid=${apiKey}`)
    .then(response => response.json())
    .then(data => {
      var nameValue=data['name'];
      var tempValue=data['main']['temp'];
      var descValue=data['weather'][0]['description']
      data1.innerHTML=nameValue+"\n"+tempValue
    
    });*/


