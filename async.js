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

async function tinhDienTich(a, b, h) {
    try {
        const tong = await congPromise(a, b);
        const tich = await nhanPromise(tong, h);
        const kq = await chiaPromise(tich, 2);
        return kq;
    } catch (err) {
        return null;
    }
}

// tinhDienTich(4, 'x', 6)
// .then(kq => console.log(kq))
// .catch(x => console.log(x))

// Promise.resolve(10)
// .then(kq => console.log(kq))

// Promise.reject(new Error('Loi'))
// .then(kq => console.log(kq))
// .catch(err => console.log(err));