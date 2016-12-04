function isStringContainStart(stringFull, stringStart) {
  if(stringFull.length < stringStart.length) return false;

  var isContain = true;
  for (var i = 0; i <= stringStart.length - 1; i++) {
    if (stringStart[i] != stringFull[i]) isContain = false;
  }
  return isContain;
}
