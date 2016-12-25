// jshint esversion: 6
(function summTwoStrings(strOne, strtwo) {

  var arrStr = [];
  arrStr[0] = strOne;
  arrStr[1] = strtwo;

  var summ = 0;

  for(let i in arrStr) {
    summ += parseStrToInt(arrStr[i]);
    // console.log(parseStrToInt(arrStr[i]));
}

console.log('Summ : ' + summ);

function isHex(strToCheck) {
  const hexArr = ['0','1','2','3','4','5','6','7','8','9',
                  'a','b','c','d','e','f',
                  'A','B','C','D','E','F'];

  for (let i = 0; i <= strToCheck.length -1; i++) {
      var isHexChar = false;
      for(let j in hexArr) {
        if (strToCheck.charAt(i) == hexArr[j] ) {
          isHexChar = true;
          break;
        }
      }
      if (isHexChar !== true) return false;
  }
  return true;
}

function parseStrToInt(strToCheck) {
  var strHex = parseInt(strToCheck, 16);
  var strInt = parseInt(deleteChar(strToCheck), 10);
  if (isNaN(strHex) || isNaN(strInt)) return 0;
  if (isHex(strToCheck)) return strHex;
  else return strInt;
}

function deleteChar(strToDel) {
    var noChar = '';
    for(let i in strToDel) {
      if (!isNaN(parseInt(strToDel.charAt(i), 10))) noChar += strToDel.charAt(i);
    }
    return noChar;
}

}('123x1z13',''));
