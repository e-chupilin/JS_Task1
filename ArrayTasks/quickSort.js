console.log('Quack sorted array : ' +

(function quickSort(array) {
    if (array.length == 0) return [];

    var left = [], right = [], pivot = array[0];

    for (var i = 1; i < array.length; i++) {
        if(array[i] < pivot)
            left.push(array[i])
        else
            right.push(array[i]);
    }
    var sortArr = quickSort(left).concat(pivot, quickSort(right));
    return sortArr;
  }([1,2,4,5,8,4])));
