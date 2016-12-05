(function isStringContainStart(stringFull, stringStart) {
  if(stringFull.length < stringStart.length) return false;

  var isContain = true;
  for (var i = 0; i <= stringStart.length - 1; i++) {
    if (stringStart[i] != stringFull[i]) isContain = false;
  }
  console.log('Is string start from - ' + stringStart + ' : ' + isContain);
  return isContain;
}('Loremipsum','Lorem'));
