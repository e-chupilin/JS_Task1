function bubbleSort(array) {
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
    return array;
}
