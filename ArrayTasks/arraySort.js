(function() {
  var obj1 = { a: 3, c: 1, d: 3};
  var obj2 = { a: 1 };
  var obj3 = { a: 2, c: 3};
  var arOgObj = [obj1, obj2, obj3];

  var res = objSort(arOgObj, 'a');
  console.log('Sort ascending : ');
  console.log(res);

  res = objSort(arOgObj, 'a',false);
  console.log('Sort descending : ');
  console.log(res);


  function objSort(arrToSort, strObjParamToSortBy, sortAscending ) {
      if(sortAscending == undefined) sortAscending = true;

      if(sortAscending) {
          arrToSort.sort(function (a, b) {
              return a[strObjParamToSortBy] > b[strObjParamToSortBy];
          });
      }
      else {
          arrToSort.sort(function (a, b) {
              return a[strObjParamToSortBy] < b[strObjParamToSortBy];
          });
      }
      return arrToSort;
  }
}());
