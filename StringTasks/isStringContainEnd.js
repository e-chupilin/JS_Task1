(function isStringContainEnd(stringFull, stringEnd) {
  if(stringFull.length < stringEnd.length) return false;

  var isContain = true;
  for (var i = 0; i <= stringEnd.length - 1; i++) {
    if (stringEnd[stringEnd.length - 1 - i] != stringFull[stringFull.length - 1 - i]) {
    isContain = false;
      }
    }
    console.log('Is string end by - ' + stringEnd + ' : ' + isContain);
  return isContain;
}('Kiko','ko'));
