const btn=document.getElementById('btn')
const city = document.getElementById('cityInput')
const display=document.getElementById('display')




// get the city input to the url
function getWeather() {
    const place=city.value.trim().toLowerCase();
    if (city === '') {
        alert('Please enter a city name.');
        return;
    }
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=a9d6f8d2e6cb7ba0fd3cf5c5fa3a4b45`;

    fetchWeather(url);
}

// async await fetch weather data from openweather api
 
 async function fetchWeather(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data); // Optional: log the data to see the structure

        const weatherInfo = `
        <p class='text-xl'>Country: ${data.sys.country}</p>
        <p class='text-blue-500 text-xl'>City: ${data.name}</p>
        <p class='text-red-500'>Temperature: ${(data.main.temp-273.15).toFixed(1)}°C</p>
        <p class='text-green-500'>Description: ${data.weather[0].description}</p>
        <p>Wind Speed: ${data.wind.speed} mph</p>
        <p>Humidity:${data.main.humidity}% </p>
        `;
        display.innerHTML = weatherInfo;
    } catch (error) {
        
        display.innerHTML = `<p class='text-red-500 text-3xl'>Try again.</p>;`
    }
}

// Add click event listener to fetch weather
btn.addEventListener('click', getWeather);