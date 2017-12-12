const request = require('request');

request('http://api.openweathermap.org/data/2.5/weather?appid=01cc37655736835b0b75f2b395737694&units=metric&q=Ha%20noi', (err, res, body) => {
    const obj = JSON.parse(body);
    console.log(obj.main.temp);
});
