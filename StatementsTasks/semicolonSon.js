// jshint esversion: 6
(function semicolonSon (str) {
'use strict';
  // SEMICOLON first position must take Array delimiter.
  const SEMICOLON = ':,;';

  var array = [];
  var currentArray = array;
  var s = str;

  console.log('Enter: ' + str);

  while(hasNext(s)) {
    if (isNextObj(s)) {
        s = deleteSemicolonAtStart(s);
        let key = nextElement(s);
        s = deleteElementAtStart(s);
        currentArray[key] = [];
        currentArray = currentArray[key];
        s = deleteSemicolonAtStart(s);
    } else {
      s = deleteSemicolonAtStart(s);
      let key = nextElement(s);
      s = deleteElementAtStart(s);
      s= deleteSemicolonAtStart(s);
      let val = nextElement(s);
      s = deleteElementAtStart(s);
      currentArray[key] = val;
      s = deleteSemicolonAtStart(s);
    }
  }
  console.log('Output: ');
  console.log(array);

  function hasNext(str) {
    for(let i in str) {
      switch (str[i]) {
        case SEMICOLON.charAt(0): return true;
        case SEMICOLON.charAt(1): return true;
        case SEMICOLON.charAt(2): return true;
      }
    }
    return false;
  }

  function nextElement(str) {
    for(let i in str) {
      for(let j in SEMICOLON) {
        if (str.charAt(i) == SEMICOLON.charAt(j)) return str.slice(0,i);
      }
    }
    return str;
  }

  function deleteSemicolonAtStart(str) {
    for(let i in SEMICOLON){
    if (str.charAt(0) == SEMICOLON[i]) {
      return str.slice(1,str.length);
    }
  }
    return str;
  }

  function deleteElementAtStart(str) {
    for(let i in str) {
      for(let j in SEMICOLON) {
        if (str.charAt(i) == SEMICOLON.charAt(j)) return str.slice(i,str.length);
      }
    }
    return str;
  }

  function isNextObj(str) {
    for(let i in str) {
      switch (str[i]) {
        case SEMICOLON.charAt(0): return true;
        case SEMICOLON.charAt(1): return false;
        case SEMICOLON.charAt(2): return false;
      }
    }
  }
}(';key,value;key1,value;arrayHere:k1,v1;k2,v2;k3,v3'));
