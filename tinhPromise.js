const request = require('request');

function congPromise(a, b) {
    return new Promise((resolve, reject) => {
        if (isNaN(a) || isNaN(b)) return reject(new Error('Type error'));
        request(`http://localhost:3000/tinh/CONG/${a}/${b}`, (err, res, body) => {
            if (err) return reject(err);
            resolve(body);
        });
    });
}

function nhanPromise(a, b) {
    return new Promise((resolve, reject) => {
        if (isNaN(a) || isNaN(b)) return reject(new Error('Type error'));
        request(`http://localhost:3000/tinh/NHAN/${a}/${b}`, (err, res, body) => {
            if (err) return reject(err);
            resolve(body);
        });
    });
}

function chiaPromise(a, b) {
    return new Promise((resolve, reject) => {
        if (b == 0) return reject(new Error('Divide by zero'));
        if (isNaN(a) || isNaN(b)) return reject(new Error('Type error'));
        request(`http://localhost:3000/tinh/CHIA/${a}/${b}`, (err, res, body) => {
            if (err) return reject(err);
            resolve(body);
        });
    });
}

function getTempPromise(cityName) {
    return new Promise((resolve, reject) => {
        const preURL = 'http://api.openweathermap.org/data/2.5/weather?appid=01cc37655736835b0b75f2b395737694&units=metric&q=';
        request(preURL + cityName, (err, res, body) => {
            if (err) return reject(err);
            const obj = JSON.parse(body);
            // temp = obj.main.temp;
            if (!obj.main) {
                return reject(new Error(obj.message));
            }
            resolve(obj.main.temp);
        });
    });
}

// getTempPromise('xcdcd')
// .then(temp => console.log(`Temp: ` + temp))
// .catch(err => console.log(err.message));

// congPromise(4, 5)
// .then((result) => console.log(result))
// .catch((err) => console.log(err))
