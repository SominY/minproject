const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');
const error404 = document.querySelector('.not-found');
const cityHide = document.querySelector('.city-hide');

const weather = document.getElementById('weather');
const weatherPopup = document.getElementById('weatherPopup');

weather.addEventListener('click', () => {
    weatherPopup.classList.add('active');
});

weatherPopup.addEventListener('click', (e) => {
    if (e.target === weatherPopup) {
        weatherPopup.classList.remove('active');
    }
});

search.addEventListener('click', () => {

    const APIKey = 'd1569da48f0b4251e9ec538982a29548';
    const city = document.querySelector('.search-box input').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}&units=metric`;

    if (city == '') return;
    
    fetch(url)
        .then(response => response.json())
        .then(json => {

        if (json.cod =='404') {
            cityHide.textContent = city;

            container.style.height = '400px';
            weatherBox.classList.remove('active');
            weatherDetails.classList.remove('active');
            error404.classList.add('active');
            return;
        } else {

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

            switch(json.weather[0].main) {
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
        cityHide.textContent = city;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
    });
});
