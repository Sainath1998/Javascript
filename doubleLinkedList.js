// Implementation of double linked list
function doublyLinkedListNode(data)
{
    this.data = data;
    this.next = null;
    this.prev = null;
}
function doublyLinkedList()
{
    this.head = null;
    this.tail = null;
    this.size = 0 ;
}
doublyLinkedList.prototype.isEmpty = function()
{
    return this.size == 0;
}
doublyLinkedList.prototype.addAtFront = function(value)
{
    if(this.head == null)
    {
        this.head = new doublyLinkedListNode(value);
        this.tail = this.head;
    }
    else
    {
        var temp = new doublyLinkedListNode(value);
        temp.next = this.head;
        this.head.prev = temp ;
        this.head =temp;
    }
    this.size ++;
}

var dll1 = new doublyLinkedList();
dll1.addAtFront(10);
dll1.addAtFront(20);
dll1.addAtFront(30);
dll1.addAtFront(40);
console.log(dll1)
doublyLinkedList.prototype.findStartingHead = function(value)
{
    var currentHead = this.head;
    while(currentHead.next)
    {
        if(currentHead.data = value)
        {
            return true
        }
        currentHead = currentHead.next;
    }
    return false
}
console.log(dll1.findStartingHead(10))