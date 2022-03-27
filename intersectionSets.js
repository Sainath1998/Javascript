function interSectionSets(SetA ,SetB)
{
    var intersection = new Set();
    for(Elem of SetB)
    {
        if(SetA.has(Elem))
        intersection.add(Elem)
    }
    return intersection
}

SetA = new Set([1,2,3,4,5,6])
SetB = new Set([3,4,5,6,7,8])
console.log(interSectionSets(SetA,SetB))
