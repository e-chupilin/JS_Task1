(function reverseString(str) {
  var reverseStr = '';
  for (var i = str.length - 1; i >= 0; i--) {
    reverseStr += str[i];
    }
  console.log(reverseStr);
  return reverseStr;
} ('qwertyu'));
