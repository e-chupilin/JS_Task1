(function summTwoStrings(strOne, strtwo) {

  var arrStr = [];
  arrStr[0] = strOne;
  arrStr[1] = strtwo;

  var summ = 0;

  for(i in arrStr) {
    summ += parseStrToInt(arrStr[i]);
    // console.log(parseStrToInt(arrStr[i]));
}

console.log('Summ : ' + summ);

function isHex(strToCheck) {
  const hexArr = ['0','1','2','3','4','5','6','7','8','9',
                  'a','b','c','d','e','f',
                  'A','B','C','D','E','F'];

  for (var i = 0; i <= strToCheck.length -1; i++) {
      var isHexChar = false;
      for(j in hexArr) {
        if (strToCheck[i] == hexArr[j] ) {
          isHexChar = true;
          break;
        }
      }
      if (isHexChar != true) return false;
  }
  return true;
}

function parseStrToInt(strToCheck) {
  if (isHex(strToCheck)) return parseInt(strToCheck, 16);
  else return parseInt(deleteChar(strToCheck), 10);
}

function deleteChar(strToDel) {
    var noChar = '';
    for(i in strToDel) {
      if (!isNaN(parseInt(strToDel[i], 10))) noChar += strToDel[i];
    }
    return noChar;
}

}('123x1z13','a123'));
