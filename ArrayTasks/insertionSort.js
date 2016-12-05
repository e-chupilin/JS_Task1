(function insertionSort(array) {
  for(var i = 1; i < array.length; ++i) {
    var temp = array[i];
    for(var j = i - 1; (j >= 0) & (array[j] > temp); --j) {
      array[j+1] = array[j];
    }
    array[j+1] = temp;
  }
  console.log('Insertion sort array : ' + array);
  return array;
}([2,5,8,9,1]));
