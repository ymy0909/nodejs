// crypto模块的目的是为了提供通用的加密和哈希算法。

const crypto = require('crypto');
const hash =  crypto.createHash('md5');

// 可以任意多次调用update()
hash.update('hello,world')
hash.update('hello,nodejs')

console.log(hash.digest('hex')) //参数encoding（编码方式）可以为'hex', 'binary' 或者'base64'。
//cd3e64e7e87896b245d7a30ccfc1a048
//update()方法默认字符串编码为UTF-8，也可以传入Buffer。
//如果要计算SHA1，只需要把'md5'改成'sha1'
//还可以使用更安全的sha256和sha512。

//Hmac
// Hmac算法也是一种哈希算法，它可以利用MD5或SHA1等哈希算法。
// 不同的是，Hmac还需要一个密钥：
// 可以把Hmac理解为用随机数“增强”的哈希算法。
const hmac = crypto.createHmac('sha256','secret-key')

hmac.update('hello,world')
hmac.update('hello,nodejs')

console.log(hmac.digest('hex')) 

// AES
// AES是一种常用的对称加密算法，加解密都用同一个密钥。
// crypto模块提供了AES支持，但是需要自己封装好函数，便于使用：

//加密
function aesEncrypt(data, key) {
  const cipher = crypto.createCipher('aes192', key);
  var crypted = cipher.update(data, 'utf8', 'hex');
  crypted += cipher.final('hex');
  return crypted;
}
//解密
function aesDecrypt(encrypted, key) {
  const decipher = crypto.createDecipher('aes192', key);
  var decrypted = decipher.update(encrypted, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  return decrypted;
}

var data = 'Hello, this is a secret message!';
var key = 'Password!';
var encrypted = aesEncrypt(data, key);
var decrypted = aesDecrypt(encrypted, key);

console.log('Plain text: ' + data);
console.log('Encrypted text: ' + encrypted);
console.log('Decrypted text: ' + decrypted);

// cipher.final([outputEncoding]) 
// outputEncoding <string> 
// 返回任何加密的内容。如果 
// outputEncoding 参数是'latin1', 'base64' 或者 'hex'，
// 返回字符串。 如果没有提供 outputEncoding，则返回Buffer。 
// 一旦cipher.final()方法已被调用，
//  Cipher 对象就不能再用于加密数据。
//  如果试图再次调用cipher.final()，将会抛出一个错误。


//Diffie-Hellman
//DH算法是一种密钥交换协议，
//它可以让双方在不泄漏密钥的情况下协商出一个密钥来。

//xiaoming
var ming = crypto.createDiffieHellman(512)
var ming_keys = ming.generateKeys()
var prime = ming.getPrime()
var genertator = ming.getGenerator()

var hong = crypto.createDiffieHellman(prime,genertator)
var hong_keys = hong.generateKeys()

var ming_secret = ming.computeSecret(hong_keys)
var hong_secret = ming.computeSecret(ming_keys)

// print secret:
console.log('Secret of Xiao Ming: ' + ming_secret.toString('hex'));
console.log('Secret of Xiao Hong: ' + hong_secret.toString('hex'));

//RSA算法
// RSA算法是一种非对称加密算法，即由一个私钥和一个公钥构成的密钥对，通过私钥加密，公钥解密，
// 或者通过公钥加密，私钥解密。其中，公钥可以公开，私钥必须保密。
//后面学
