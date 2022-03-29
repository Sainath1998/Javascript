function heap()
{
    this.items = []
}
heap.prototype.swap  = function(index1,index2)
{
    var temp = this.items[index1];
    this.items[index1]=this.items[index2];
    this.items[index2]=temp;
}
heap.prototype.parentIndex = function(index)
{
    return Math.floor((index-1)/2)
}
heap.prototype.leftChildINdex = function(index)
{
    return index * 2 + 1;
}
heap.prototype.rightChildIndex = function(index)
{
    return index * 2 + 2;
}
heap.prototype.parent = function(index)
{
    return this.items[this.parentIndex(index)];
}
heap.prototype.leftChild = function(index)
{
    return this.items[this.leftChildINdex(index)];
}
heap.prototype.rightChild = function(index)
{
    return this.items[this.rightChildINdex(index)];
}
heap.prototype.peek = function(item)
{
    return this.item[0];
}
heap.prototype.size = function()
{
    return this.items.length;
}
