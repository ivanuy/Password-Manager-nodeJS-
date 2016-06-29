var cryptoJS = require("crypto-js");

// var secretMessage = 'I hid the chips under the bed';
//var secretKey = '123abc';

// //encrypt
// var encryptedMessage = cryptoJS.AES.encrypt(secretMessage, secreteKey);
// console.log('Encrypted Message: ' + encryptedMessage);

// //decrypt
// var bytes = cryptoJS.AES.decrypt(encryptedMessage, secreteKey);
// var decryptedMessage = bytes.toString(cryptoJS.enc.Utf8);
// console.log('Decrypted message: ' + decryptedMessage);

// encrypting objects
var secretMessage = {
	name: 'ivan',
	secretName: '007'
};

var secretKey = '34123';
var secretMessageJSON = JSON.stringify(secretMessage);
console.log(secretMessageJSON); // this is now a string
//encrypt
var encryptedMessage = cryptoJS.AES.encrypt(secretMessageJSON, secretKey);
console.log('Encrypted Message: ' + encryptedMessage);

//decrypt
var bytes = cryptoJS.AES.decrypt(encryptedMessage, secretKey);
var decryptedMessage = bytes.toString(cryptoJS.enc.Utf8);
console.log(decryptedMessage);//string

//string -> objects
var secreteMessageObject = JSON.parse(decryptedMessage);
console.log('Decrypted Message: ' + secreteMessageObject);

