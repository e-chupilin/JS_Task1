function countingSort(array) {
    var i, j, k;
    var min = array[0];
    var max = array[0];
    for(i=0; i<array.length; i++) {
      if (min > array[i])
        min = array[i];
      else if (max < array[i])
        max = array[i];
    }
    var counts = [];
    var newarray = [];
    for(i=0; i<max-min+1; i++) {
      counts[i] = 0;
    }
    for(i=0; i<array.length; i++) {
      counts[array[i]-min]++;
    }
    k = 0
    for(i=0; i<counts.length; i++) {
      for(j=0; j<counts[i]; j++) {
        newarray[k++] = i + min;
      }
    }
    return newarray;
}
