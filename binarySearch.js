function Binarysearch(array,n)
{
    let len = array.length
    let mid  = len / 2
    if(n<len)
    {
        for(let i = 0 ; i < mid ; i ++)
        {
            if(array[i] == n)
            {
                console.log('found at',i)
            }
        }
    }
    else
    {
        for(let i = 0 ; i >= mid ; i ++)
        {
            if(array[i] == n)
            {
                console.log('found at',i)
            }
        }
    }

}
Binarysearch([1,2,3,4,5,6,7,8,9,10,11,12,13],2)