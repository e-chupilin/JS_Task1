(function printingTriangles(cubeLength) {
  const DELIMITER = '          ';
  var oneCube = [];
  var twoCube = [];

  console.log('/*');

  for (i = 0; i <= cubeLength - 1; i++) {
    oneCube[i] = [];
    twoCube[i] = [];

    for (j = 0; j <= cubeLength - 1; j++) {

      if ( (i <= j) & (i <= cubeLength - 1 - j) |
       (i >= j) & (i >= cubeLength - 1 - j)) {
         oneCube[i][j] = '1';
       } else {
         oneCube[i][j] = '0';
       }

      if ((i >= j) & (cubeLength - 1 - i >= j)) {
        twoCube[i][j] = '1';
      } else {
        twoCube[i][j] = '0';
      }
    }
  }

  for (i = 0; i <= cubeLength - 1; i++) {
    var strToConsole = '';
    for (j = 0; j <= cubeLength - 1; j++) strToConsole += oneCube[i][j];
    strToConsole += DELIMITER;
    for (j = 0; j <= cubeLength - 1; j++) strToConsole += twoCube[i][j];
    console.log(strToConsole);
  }
  console.log('*/');
}(20));
