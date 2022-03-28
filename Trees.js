//code block for a tree node
function treeNode(value)
{
    this.value = value;
    this.children = []
}
//Binary tree node , it has only two child nodes
function binaryTreeNode(value)
{
    this.value = value;
    this.left = null ;
    this.right = null;
}
//Binary tree always has a root node which is initialized to null befroe any elemnt is inserted
function binaryTree()
{
    this._root = null;
}
// tree traversal  - Pre-order traversal
binaryTree.prototype.traversePreOrder = function()
{
    this.traversePreOrderHelper(this._root);

    function traversalPreOrderHelper(node)
    {
        if(!node)
        {
            return;
            console.log(node.value);
            traversalPreOrderHelper(node.left);
            traversePreOrderHelper(node.right);
        }
    }
}
