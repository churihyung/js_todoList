const API_KEY = 'c11492e684d9b50484e641a0841c900a';

function loadSuccess(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;
    fetch(apiUrl).then(response => response.json().then(data => {
        const city = data.name;
        const weather = data.weather[0].main;
        const temper = `현재온도 : ${data.main.temp} 최저/최고 ${data.main.temp_max} / ${data.main.temp_min}`
        const spanCity = document.querySelector(".city");
        const spanWeather = document.querySelector(".weather");
        const spanTemper = document.querySelector(".temper");
        spanCity.innerText = city;
        spanWeather.innerText = weather;
        spanTemper.innerText = temper;

    
    }));
}
function loadFail(err){
    console.warn(`ERROR(${err.code}): ${err.message}`);
}


navigator.geolocation.getCurrentPosition(loadSuccess,loadFail);

