const request = require('request');

function cong(a, b, cb) {
    if (isNaN(a) || isNaN(b)) return cb(new Error('Type error'));
    request(`http://localhost:3000/tinh/CONG/${a}/${b}`, (err, res, body) => {
        if (err) return cb(err);
        cb(null, body);
    });
}

function nhan(a, b, cb) {
    if (isNaN(a) || isNaN(b)) return cb(new Error('Type error'));
    request(`http://localhost:3000/tinh/NHAN/${a}/${b}`, (err, res, body) => {
        if (err) return cb(err);
        cb(null, body);
    });
}

function chia(a, b, cb) {
    if (isNaN(a) || isNaN(b)) return cb(new Error('Type error'));
    if (b == 0) return cb(new Error('Divide by zero'));
    request(`http://localhost:3000/tinh/CHIA/${a}/${b}`, (err, res, body) => {
        if (err) return cb(err);
        cb(null, body);
    });
}

// (4 + 5) * 6 / 2
// cong(4, 5, (err, tong) => {
//     if (err) return console.log(err);
//     nhan(tong, 6, (err, tich) => {
//         if (err) return console.log(err);
//         chia(tich, 2, (err, result) => {
//             if (err) return console.log(err);
//             console.log(result);
//         });
//     });
// });
function tinhDienTich(a, b, h, cb) {
    cong(a, b, (err, tong) => {
        if (err) return cb(err);
        nhan(tong, h, (err, tich) => {
            if (err) return cb(err);
            chia(tich, 2, (err, result) => {
                if (err) return cb(err);
                cb(null, result);
            });
        });
    });
}

tinhDienTich(4, 5, 12, (err, result) => {
    if (err) return console.log(err);
    console.log(result);
});
