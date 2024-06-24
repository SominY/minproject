const API_KEY = "d1569da48f0b4251e9ec538982a29548";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon= position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    console.log(url)

    /* 네트워크에서 리소스를 취득하는 절차를 시작하고, 응답이 사용 가능해지면 이행하는 프로미스를 반환 */
    fetch(url)
        .then((res) => res.json())
        .then((result) => {
            const city = document.getElementById("city");
            const weather = document.getElementById("temp");
            const weatherIcon = document.querySelector(".weather_icon");

            city.innerText = result.name;
            weather.innerText = `${Math.round(result.main.temp)} °C`;

            let condition = result.weather[0].main;
            //console.log(condition);
            if (condition === "Clouds") {
                weatherIcon.src = "weather_img/clouds.png";
            }
            else if (condition === "Clear") {
                weatherIcon.src = "weather_img/clear.png";
            }
            else if (condition === "Drizzle") {
                weatherIcon.src = "weather_img/drizzle.png";
            }
            else if (condition === "Rain") {
                weatherIcon.src = "weather_img/rain.png";
            }
            else if (condition === "Snow") {
                weatherIcon.src = "weather_img/snow.png";
            }
            else if (condition === "Wind") {
                weatherIcon.src = "weather_img/wind.png";
            }
    })
}

function onGeoError() {
    alert("Can't find you. No weather for you.")
}

/* 현재 사용자 위치를 불러오는 함수 */
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);