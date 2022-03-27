function bubbleSort(array)
{
    for(var i = 0, arrayLength = array.length ; i < arrayLength ; i++)
    {
        for(var j = 0 ; j <= i ; j++)
        {
            if(array[i]<array[j])
            {
                temp = array[i]
                array[i] = array[j]
                array[j]= temp 
            }
        }
    }

    return array
}
newArr = bubbleSort([9,8,7,6,5,4,3,2,1,0])
console.log(newArr)