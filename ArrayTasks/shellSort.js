(function shellSort (array) {
  var len = array.length;
    for (var h = len; h = parseInt(h / 2);) {
        for (var i = h; i < len; i++) {
            var k = array[i];
            for (var j = i; j >= h && k < array[j - h]; j -= h)
                array[j] = array[j - h];
            array[j] = k;
        }
    }
    console.log('Shell sort array : ' + array);
    return array;
}([1,3,2,4,99,11]));
