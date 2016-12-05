(function minMaxAvg(arrays) {
  var min = arrays[0][0], max  = arrays[0][0], avg = 0;

  for(i in arrays) {
    var array = arrays[i];

    if (arrays.length != array.length) {
       console.log('Arrays is not square.');
       return;
  }

    for(j in array) {
      if(array[j] < min) min = array[j];
      if(array[j] > max) max = array[j];
      avg += array[j];
    }
  }
  console.log('Min value : ' + min);
  console.log('Max value : ' + max);
  console.log('Average : ' + avg / arrays.length / array.length);

}([[7,999,3],[4,5,6],[0,0,99]]));
