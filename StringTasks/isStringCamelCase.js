(function isStringCamelCase(str) {
  isCamelCase = false;
  for (var i = 0; i <= str.length - 1; i++) {
    if (str[i] == str[i].toUpperCase()) isCamelCase = true;
  }
  console.log('Is string in camel case : ' + isCamelCase);
  return isCamelCase;
}('CamelCase'));
