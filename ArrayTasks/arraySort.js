function objSort(arrToSort, strObjParamToSortBy, sortAscending ) {
    if(sortAscending === undefined) sortAscending = true;
    arrToSort.sort(function (a, b) {
            var ela = a[strObjParamToSortBy];
            var elb = b[strObjParamToSortBy];
            if (ela === undefined) return (!sortAscending);
            if (elb === undefined) return (sortAscending);
            return (sortAscending) ? (ela - elb) : (elb - ela);
        });
        return arrToSort;
      }
      var obj0 = {a: 100};
      var obj1 = {a: 1, c:1, d: 0};
      var obj2 = {};
      var obj3 = {a: 2, c: 2};
      var obj4 = {a:-100};
      var arOgObj = [obj0, obj1, obj2, obj3, obj4];

      var res = objSort(arOgObj, 'a');
      console.log('Sort ascending : ');
      console.log(res);

      res = objSort(arOgObj, 'a',false);
      console.log('Sort descending : ');
      console.log(res);
