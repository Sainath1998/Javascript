//Directed Graphs
function directedGraph()
{
    this.edges = {};
}
directedGraph.prototype.addVertex = function(vertex)
{
    this.edges[vertex] = {}
}
directedGraph.prototype.addEdge = function(origVertex,desVertex,weight)
{
    if(weight == undefined)
    {
        weight = 0;
    }
    this.edges[origVertex][desVertex] = weight;
}

var digraph1 = new directedGraph();
digraph1.addVertex("A");
digraph1.addVertex("B");
digraph1.addVertex("C");
digraph1.addEdge("A","B",1);
digraph1.addEdge("B","C",2);
digraph1.addEdge("C","A",3);