(function bubbleSort(array) {
    var len = array.length;
    var tmp;
    var swapped=true;
    while(swapped)
    {
        swapped=false;
        for(var i=0; i<len-1; i++)
        {
            if(array[i]>array[i+1])
            {
                temp=array[i];
                array[i]=array[i+1];
                array[i+1]=temp;
                swapped=true;
            }
        }
    }
    console.log('Bubble sort array : ' + array);
    return array;
}([2,6,3,9,12,33,76,12,12]));
