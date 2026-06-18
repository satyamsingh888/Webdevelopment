document.addEventListener('DOMContentLoaded',function(){
    const cityInput = document.querySelector('#city-input');
    const getWeatherBtn  =  document.querySelector("#get-weather-btn");
    const weatherInfo  =  document.querySelector("#weather-info");
    const temperatureDisplay  =  document.querySelector("#temperature");
    const descriptionDisplay  =  document.querySelector("#description");
    const errorMessage  =  document.querySelector("#error-message");
    const cityNameDisplay = document.querySelector("#city-name");

    const API_KEY = "";//env variable

    getWeatherBtn.addEventListener('click',async ()=>{
        const city = cityInput.value.trim();
        if(!city)  return;


        //it may throw an error 
        //server and database is always in another continent

        try {
          const weatherData = await  fetchWeatherData(city)
          displayWeatherData(weatherData)
        } catch (error) {
            showError()
        }
    })
 
    async  function fetchWeatherData(city){
        //gets the data
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
        const response =await fetch(url)
        console.log(typeof response);
        console.log( response);

        if(!response.ok){
            throw new Error ("City not Found")
        }
       const data =  await response.json()
       return data
    }
    function displayWeatherData(data){
        //Display
        console.log(data);
        const {name, main,weather} =data
        cityNameDisplay.textContent = name;

        //unlock the display
        weatherInfo.classList.remove('hidden')
        errorMessage.classList.add('hidden')
        temperatureDisplay.textContent=   `Temperature: ${main.temp}`
        descriptionDisplay.textContent=   `Weather: ${weather[0].description}`
    }
    function showError(){
        weatherInfo.classList.remove('hidden')
        errorMessage.classList.remove('hidden')
    }
})

