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

congPromise(4, 5)
.then((result) => console.log(result))
.catch((err) => console.log(err))
