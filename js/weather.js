const API_KEY = "d1569da48f0b4251e9ec538982a29548";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

    fetch(url)
        .then((response) => response.json())
        .then(json => {
            const city = document.getElementById("city");
            const weather = document.getElementById("temp");
            const weatherIcon = document.querySelector("#weather img");

            city.innerText = json.name;
            weather.innerText = `${Math.round(json.main.temp)} °C`;

            switch(json.weather[0].main) {
                case 'Clear':
                    weatherIcon.src = 'weather_img/clear.png';
                    break;
                
                case 'Rain':
                    weatherIcon.src = 'weather_img/rain.png';
                    break;
    
                case 'Snow':
                    weatherIcon.src = 'weather_img/snow.png';
                    break;
                    
                case 'Clouds':
                    weatherIcon.src = 'weather_img/cloud.png';
                    break;

                case 'Drizzle':
                    weatherIcon.src = 'weather_img/drizzle.png';
                    break;
                    
                case 'Mist':
                case 'Haze':
                    weatherIcon.src = 'weather_img/mist.png';
                    break;    
                 
                default:
                    weatherIcon.src = 'weather_img/clear.png'; 
                    break;   
            }
    });
}

function onGeoError() {
    alert("Can't find you. No weather for you.")
}

/* 현재 사용자 위치를 불러오는 함수 */
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);