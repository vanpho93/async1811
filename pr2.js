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

Promise.all([
    congPromise(4, 5),
    chiaPromise(6, 2)
])
.then(x => console.log(x))
.catch(err => console.log(err));
// congPromise(4, 5)
// .then(() => chiaPromise(6, 2))
// .then(x => console.log(Date.now() - start))