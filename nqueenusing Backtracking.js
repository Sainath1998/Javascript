function isSafe(arr,x,y,n)
{
    for(var row = 0 ; row < x ; row ++ )
    {
        if(arr[row][y] == 1)
        {
            return false;
        }
    }
    row = x;
    col = y;
    while(row >= 0 && col >=0)
    {
        if(arr[row][col] == 1)
        {
            return false;
        }
        row --;
        col --;
    }
    row = x;
    col = y;
    while(row>=0 && col< n)
    {
        if(arr[row][col] == 1)
        {
            return false
        }
        row -- ;
        col ++ ;
    }
    return true
}
function nQueen(arr,x,n)
{
    if(x >=n)
    {
        return true
    }
    for(let col = 0;col < n; col++)
    {
        if(isSafe(arr,x,col,n))
        {
            arr[x][col] = 1;
            if(nQueen(arr,x+1,n))
            {
                return true
            }
            arr[x][col] = 0;
        }
    } 
    return false;
}
const  n = 6;
let arr = Array.from(Array(n), () => new Array(n));
for(let i = 0 ; i <n ; i++)
{
    for(let j = 0; j< n ; j++)
    {
        arr[i][j] = 0
    }
}
if(nQueen(arr,0,n))
{
    for(let i = 0 ; i <n ; i++)
    {
        console.log(arr[i])

    }
}