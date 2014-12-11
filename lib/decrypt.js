var strfchar = String.fromCharCode;

function decrypt(cipherText, key) {
  var keyChars = key.split('');
  var cipherPairs = cipherText.match(/.{1,2}/g);

  var message = cipherPairs
    .map(function(val) {
      var h1, h2, cipherChar, hexChar;

      // get the next two characters of the key
      h1 = keyChars.shift();
      h2 = keyChars.shift();

      // calculate decimal number from encoded ascii bits
      cipherChar = parseInt(val, 16);

      // calculate decimal number from decoder bits
      hexChar = parseInt(h1 + h2, 16);

      // return the characters to the key for looping
      keyChars.push(h1, h2);

      return strfchar(cipherChar ^ hexChar);
    }).join('');

  return message;
}

module.exports = decrypt;
