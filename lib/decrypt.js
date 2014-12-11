function decrypt(cipherText, key) {
  var keyChars = key.split('');

  var message = cipherText.split('')
    .map(function(val, i, arr) {
      if (i % 2 > 0) return;

      var a1, a2, h1, h2, cipherChar, hexChar;

      // get next two characters of cipher text
      a1 = val;
      a2 = arr[i + 1];

      // get the next two characters of the key
      h1 = keyChars.shift();
      h2 = keyChars.shift();

      // calculate decimal number from encoded ascii bits
      cipherChar = parseInt(a1 + a2, 16);

      // calculate decimal number from decoder bits
      hexChar = parseInt(h1 + h2, 16);

      // return the characters to the key for looping
      keyChars.push(h1, h2);

      return String.fromCharCode(cipherChar ^ hexChar);
    }).join('');

  return message;
}

module.exports = decrypt;
