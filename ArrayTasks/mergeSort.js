(function mergeSort(array)
{
    if(array.length == 1 ) {
      console.log(array);
      return array;
    }

    var mid = array.length / 2;
    var left = array.slice(0, mid);
    var right = array.slice(mid);

    left = mergeSort(left);
    right = mergeSort(right);
    return merge(left, right);
} ([8,3,1,2,3,5,6,7,7]));

function merge(left, right)
{
    var result=[];
    var leftIndex=0;
    var rightIndex=0;

    while(leftIndex<left.length && rightIndex<right.length)
    {
        if(left[leftIndex]>right[rightIndex])
        {

            result.push(right[rightIndex]);
            rightIndex++;
        }
        else
        {
            result.push(left[leftIndex]);
            leftIndex++;
        }
    }
    while(leftIndex<left.length)
    {
        result.push(left[leftIndex]);
        leftIndex++;
    }
    while(rightIndex<right.length)
    {
        result.push(right[rightIndex]);
        rightIndex++;
    }
    return result;
}
