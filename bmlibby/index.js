let bcrypt = require('bcrypt');
let encode = (Plainpass) => {
    return new Promise((resolve, reject) => {
        bcrypt.genSalt(10, function (err, salt) {
            bcrypt.hash(Plainpass, salt, function (err, hash) {
                if (err) reject(err);
                resolve(hash);
            });
        });
    });
}

let compare = (Plainpass, hashpass) => {
    return new Promise((resolve, reject) => {
        bcrypt.compare(Plainpass, hashpass, (err, bool) => {
            if (err) reject(err);
            resolve(bool);
        })
    })
}
module.exports = {
    encode,
    compare
}