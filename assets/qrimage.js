var qr = require('qr-image');
var fs = require('fs');

var encodedString = process.argv[2];
var outputImage = process.argv[3];

qr.image(encodedString, { type: 'png', size: 20 }).pipe(fs.createWriteStream(outputImage));