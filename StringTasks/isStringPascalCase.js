(function isStringPascalCase(str) {
  isPascalCase = false;
  const DELIMITER = '_';

  for (var i = 1; i<=str.length - 2; i++) {
    if(str[i] == DELIMITER) isPascalCase = true;
  }
  if (str[0] == DELIMITER | str[str.length - 1] == DELIMITER ) {
    isPascalCase = false;
  }
  console.log('Is pascal case : ' + isPascalCase);
  return isPascalCase;
}('Do_action'));
