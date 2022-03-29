//adding edges and vertices to the graphs
function undirectedGraph()
{
    this.edges= {};
}

//adding vertices to the graphs

undirectedGraph.prototype.addVertex = function(vertex)
{
    this.edges[vertex] = {};
}

//adding weighted edges to the graphs
undirectedGraph.prototype.addEdge = function(vertex1,vertex2,weight)
{
    if(weight == undefined)
    {
        weight = 0;
    }
    this.edges[vertex1][vertex2] = weight;
    this.edges[vertex2][vertex1] = weight;
}
var graph1 = new undirectedGraph();
graph1.addVertex(1);
graph1.addVertex(2);
graph1.addVertex(3);
graph1.addEdge(1,2,1);
console.log(graph1.edges);
graph1.addVertex(4);
graph1.addVertex(5);
graph1.addVertex(6);
graph1.addEdge(2,3,8);
graph1.addEdge(4,5,100);
graph1.addEdge(1,5,88);
console.log(graph1.edges)