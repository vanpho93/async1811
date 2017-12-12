const request = require('request');

function getTemp(cityName) {
    const URL = 'http://api.openweathermap.org/data/2.5/weather?appid=01cc37655736835b0b75f2b395737694&units=metric&q=' + cityName;
    request(URL, (err, res, body) => {
        const obj = JSON.parse(body);
        console.log(obj.main.temp);
    });
}

getTemp('New York');
