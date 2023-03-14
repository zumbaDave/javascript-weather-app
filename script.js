const timeEl = document.getElementById('time');
const dateEl = document.getElementById('date');
const currentWeatherItemsEl = document.getElementById('current-weather-items');
const timezoneEl = document.getElementById('time-zone');
const countryEl = document.getElementById('country');
const weatherForecastEl = document.getElementById('weather-forecast');
const currentTempEl = document.getElementById('current-temp');

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const API_KEY = 'f6fa6e189eb91174b8949385fcd6359a';

setInterval(() => {
    const time = new Date();
    const month = time.getMonth();
    const date = time.getDate();
    const day = time.getDay();
    const hour = time.getHours();
    const minute = time.getMinutes();

    const hoursIn12HrFormat = hour >= 13 ? hour %12: hour;
    const ampm = hour >= 12 ? 'PM' : 'AM';

    timeEl.innerHTML = hoursIn12HrFormat + ':' + minute + ' ' + `<span id="am-pm">${ampm}</span>`;
    dateEl.innerHTML = days[day] + ', ' + date + ' ' + months[month];
}, 1000);

getWeatherData();

function getWeatherData() {
    navigator.geolocation.getCurrentPosition((success) => {
        console.log(success);

        let {latitude, longitude } = success.coords;

        console.log(API_KEY);
        fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&appid=${API_KEY}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
            });
    });
}