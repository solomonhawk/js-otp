function encrypt(message, key) {
  var keyChars, cipherText;

  keyChars = key.split('');

  cipherText = message.split('')
    .map(function(v) {
      var asciiChar, hex1, hex2, hexChar;

      // get ascii character code
      asciiChar = v.charCodeAt();

      // grab the next two characters in the key
      hex1 = keyChars.shift();
      hex2 = keyChars.shift();

      // get 8 bit number from those two numbers
      hexChar = parseInt(hex1 + hex2, 16);

      // return the characters to the key for looping
      keyChars.push(hex1, hex2);

      return (asciiChar ^ hexChar).toString(16);
    }).join('');

  return cipherText;
}

module.exports = encrypt;
