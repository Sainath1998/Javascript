//linearSearch
function linearSearch(array,n)
{
    for(var i = 0 ; i < array.length ; i ++)
    {
        if(array[i] == n)
        {
            console.log('found',n,'at',i)
        }
    }
}

linearSearch([1,2,3,4,5,6,7,89,9,4,6,6],7)