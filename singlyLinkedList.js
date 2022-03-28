function singlyLinkedListNode(data)
{
    this.data = data;
    this.next = null;
}
function singlyLinkedList() // checkes if the singly linked list is null or not
    {
        this.head = null;
        this.size = 0;
    }
singlyLinkedList.prototype.isEmpty = function()
{
    return this.size == 0 ;
}
// insertion of elemnets in the linked list
singlyLinkedList.prototype.insert = function(value)
{
    if(this.head = null)
    {
        this.head = new singlyLinkedListNode(value)
        this.head.next = temp;
    }
    this.size ++;
}
var sll1 =new singlyLinkedList();
sll1.insert(1);
sll1.insert(2);
sll1.insert(3);
sll1.insert(4);
