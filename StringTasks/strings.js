function isStringContainStart(str, s) {
  if (s === undefined || str === undefined) {
    throw 'Arrg error: function arrguments undefined.';
  }
  var regStr = '^' + s + '.*';
  var reg = new RegExp(regStr);
  return (str.match(reg) === null) ? false : true;
}

function isStringContainEnd(str, s) {
  if (s === undefined || str === undefined) {
    throw 'Arrg error: function arrguments undefined.';
  }
  var regStr = '^.*' + s + '$';
  var reg = new RegExp(regStr);
  return (str.match(reg) === null) ? false : true;
}

function isStringPascalCase(str) {
  if (str === undefined) {
    throw 'Arrg error: function arrgument undefined.';
  }
  var reg = new RegExp('^([A-Z])([A-Z0-9]*[a-z][a-z0-9]*[A-Z]|[a-z0-9]*[A-Z][A-Z0-9]*[a-z])[A-Za-z0-9]*');
  return (str.match(reg) === null) ? false : true;
}

function isStringCamelCase(str) {
  if (str === undefined) {
    throw 'Arrg error: function arrgument undefined.';
  }
  var reg = new RegExp('^([a-z])([A-Z0-9]*[a-z][a-z0-9]*[A-Z]|[a-z0-9]*[A-Z][A-Z0-9]*[a-z])[A-Za-z0-9]*');
  return (str.match(reg) === null) ? false : true;
}

function reverseString(str) {
  if (str === undefined) {
    throw 'Arrg error: function arrgument undefined.';
  }
  var reverseStr = '';
  for (var i = str.length - 1; i >= 0; i--) {
    reverseStr += str.charAt(i);
    }
  return reverseStr;
}

// isStringPascalCase
console.log('Is pascalcase: ');
console.log('Pascal000Case: ' + isStringPascalCase('Pascal000Case'));
console.log('PascalCase111: ' + isStringPascalCase('PascalCase111'));
console.log('Pascal: ' + isStringPascalCase('Pascal'));
console.log('pascal: ' + isStringPascalCase('pascal'));
console.log('PASCAL: ' + isStringPascalCase('PASCAL'));
console.log('Pascal-Case: ' + isStringPascalCase('Pascal-Case'));
console.log('_pascalCase: ' + isStringPascalCase('_pascalCase'));
console.log('');

// isStringCamelCase
console.log('Is camelcase: ');
console.log('camel000Case: ' + isStringCamelCase('camel000Case'));
console.log('CamelCase111: ' + isStringCamelCase('CamelCase111'));
console.log('camelcase: ' + isStringCamelCase('camelcase'));
console.log('CAMELCASE: ' + isStringCamelCase('CAMELCASE'));
console.log('camel-Case: ' + isStringCamelCase('camel-Case'));
console.log('_camelCase: ' + isStringCamelCase('_camelCase'));
console.log('');

// reverseString
console.log('Reverse: ');
console.log('reverse : ' + reverseString('reverse'));
console.log('');

// StringContainStart
console.log('String contain at start: ');
console.log('Kiko, Ki :' + isStringContainStart('Kiko', 'Ki'));
console.log('Kiko, ik :' + isStringContainStart('Kiko', 'ik'));
console.log('');

// StringContainEnd
console.log('String contain at end: ');
console.log('Kiko, Kiko :' + isStringContainEnd('Kiko', 'Kiko'));
console.log('Kiko, kos :' + isStringContainEnd('Kiko', 'kos'));
