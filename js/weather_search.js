const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');
const error404 = document.querySelector('.not-found');
const cityHide = document.querySelector('.city-hide');
const inputField = document.querySelector('.search-box input'); // 입력 필드 선택

const weather = document.getElementById('weather');
const weatherPopup = document.getElementById('weatherPopup');

// 날씨 팝업 열기 이벤트
weather.addEventListener('click', () => {
    openWeatherPopup();
});

// 날씨 팝업 닫기 이벤트
weatherPopup.addEventListener('click', (e) => {
    if (e.target === weatherPopup) {
        closeWeatherPopup();
    }
});

// 검색 버튼 클릭 이벤트 처리
search.addEventListener('click', () => {
    searchWeather();
});

// 날씨 팝업 열기 함수
function openWeatherPopup() {
    resetWeatherPopup();
    weatherPopup.classList.add('active');
}

// 날씨 팝업 닫기 함수
function closeWeatherPopup() {
    weatherPopup.classList.remove('active');
}

// 날씨 검색 함수
function searchWeather() {
    const APIKey = 'd1569da48f0b4251e9ec538982a29548';
    const city = inputField.value.trim();
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}&units=metric`;

    if (city === '') return;

    fetch(url)
        .then(response => response.json())
        .then(json => {
            if (json.cod == '404') {
                handleNotFoundError(city);
            } else {
                handleWeatherData(json, city);
            }
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}

// 날씨 정보 처리 함수
function handleWeatherData(json, city) {
    const image = document.querySelector('.weather-box img');
    const temperature = document.querySelector('.weather-box .temperature');
    const description = document.querySelector('.weather-box .description');
    const humidity = document.querySelector('.weather-details .humidity span');
    const wind = document.querySelector('.weather-details .wind span');

    cityHide.textContent = city;

    container.style.height = '555px';
    container.classList.add('active');
    weatherBox.classList.add('active');
    weatherDetails.classList.add('active');
    error404.classList.remove('active');

    switch (json.weather[0].main) {
        case 'Clear':
            image.src = 'weather_img/clear.png';
            break;
        case 'Rain':
            image.src = 'weather_img/rain.png';
            break;
        case 'Snow':
            image.src = 'weather_img/snow.png';
            break;
        case 'Clouds':
            image.src = 'weather_img/cloud.png';
            break;
        case 'Drizzle':
            image.src = 'weather_img/drizzle.png';
            break;
        case 'Mist':
        case 'Haze':
            image.src = 'weather_img/mist.png';
            break;
        default:
            image.src = 'weather_img/clear.png';
            break;
    }

    temperature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
    description.innerHTML = `${json.weather[0].description}`;
    humidity.innerHTML = `${json.main.humidity}%`;
    wind.innerHTML = `${parseInt(json.wind.speed)}km/h`;
}

// 검색 결과가 없을 때 처리 함수
function handleNotFoundError(city) {
    cityHide.textContent = city;

    container.style.height = '400px';
    weatherBox.classList.remove('active');
    weatherDetails.classList.remove('active');
    error404.classList.add('active');
}

// 날씨 팝업 초기화 함수
function resetWeatherPopup() {
    inputField.value = ''; // 입력 필드 초기화
    error404.classList.remove('active');
    weatherBox.classList.remove('active');
    weatherDetails.classList.remove('active');
    cityHide.textContent = '';
    container.style.height = '100px'; // 기본 높이로 설정
}