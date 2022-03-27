function isSuperSet(superSet,subSet)
{
    for(var elem of subSet)
    {
        if(!superSet.has(elem))
        {
            return false
        }
    }
    return true
}

superSet = new Set([1,2,3,4,5])
subSet = new Set([4,3,5,5])
a = isSuperSet(superSet,subSet)
if(a)
{
    console.log("Yes superset and subset")
}
else
{
    console.log("no they are not superset and subset")
}