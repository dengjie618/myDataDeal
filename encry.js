var crypto = require('crypto')
function encrypt(message, key) {
    key = key.length >= 8 ? key.slice(0, 8) : key.concat('0'.repeat(8 - key.length))
    const keyHex = Buffer.from(key, 'utf8')
    const cipher = crypto.createCipheriv('des-ecb', keyHex, null)
    let c = cipher.update(message, 'utf8', 'base64')
    c += cipher.final('base64')
    return c
}
var clientKey = 'iloveLEGOcncrm2021';
var clientSecret = 'iloveLEGO#2021tmallmp';

var AES = require("crypto-js/aes");
function encryptAES(message, key) {
    var c = AES.encrypt(message,key)
    return c.toString()
}

var phoneNo = '16600002106'
var mykey = 'afb0fd3a239f67042767fbbfb07d193fa7d1634e14dfacd9812d4aab9a217604'
console.log(encryptAES(phoneNo,mykey));