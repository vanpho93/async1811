const request = require('request');

function getTemp(cityName, cb) {
    const URL = 'http://api.openweathermap.org/data/2.5/weather?appid=01cc37655736835b0b75f2b395737694&units=metric&q=' + cityName;
    request(URL, (err, res, body) => {
        if (err) return cb(err, null);
        const obj = JSON.parse(body);
        // temp = obj.main.temp;
        cb(null, obj.main.temp);
    });
}

// console.log(getTemp('New York'));
getTemp('New York', (err, temp) => {
    if (err) return console.log(err);
    console.log(temp);
});
// request('http://localhost:3000/tinh/CONG/4/5', (err, res, body) => {
//     console.log(body);
// });