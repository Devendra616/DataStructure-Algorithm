# DataStructure-Algorithm
Data Structure and Algorithms implemented in Java Script and Java

This repository contains notes for important data structure and algorithms for interview practice.

## [Linear Search](./searching_traversing/search-linear.js)
Goes through each item of the array and check if the data exists.
    
**Time Complexity :**
- Best Case : O(1) When data exist at first index of the array
- Worst Case : O(n) When data exist at last index of the array or data not found

**Space Complexity :** O(1) no extra space required

## [Binary Search](./searching_traversing/search-binarySearch.js)
Works on an sorted array and uses the principle of Binary Search Tree.

**Time Complexity :**
- Best Case : O(1) When data exist at middle index of the array
- Worst Case : O(log n) 

**Space Complexity :** O(1) no extra space required

## [Breadth First Search (BFS)](../searching_traversing/BFS.js)
Traversing is similar to searching as we have to visit each node. Traversing is used in cases like printing each node element, modifying each node etc.

BFS travels from left to right, level by level starting from the root node. BFS is also called  *Level Order Traversal*.
BFS uses *additional memory* as we need to keep track of the child nodes. It uses queue data structure. 

Good to find *shortest path* because we traverse closer nodes first.

**Time Complexity :**
- O(|V|+|E|) where |V| is the number of nodes,you need to traverse all nodes and |E| is number of edges.

**Space Complexity :** 
- O(|V|) : since at worst case you need to hold all vertices in the queue.
Extra space required for level order traversal is O(w), where w is the maximum width of Binary Tree. Maximum width of a Binary Tree at height h  can be 2^h (h starting from 0). Maximum no of nodes are at vertex. Worst case occurs at Perfect Binary Tree. In worst case 2^h = ceil(n/2) = O(n)

*Extra space for BFS is likely to be more when the tree is more balanced.*

## [Depth First Search (DFS)](../searching_traversing/DFS.js)
DFS follows one branch of the tree to travel last leaf node of the tree. Then it moves to the next ancesstor until it does not have any unexplored child. It uses stack data structure for the recursive calls. 

Good to find *if a path exists* between two nodes.

DFS can be implemented in 3 ways :
- InOrder :
    Visit the left child.
    Visit the parent.
    Visit the right child.
- PreOrder :
    Visit the parent.
    Visit the left child.
    Visit the right child.
- PostOrder : 
    Visit the left child.
    Visit the right child.
    Visit the parent.

In case of BST, **inorder traversal** gives the nodes in ascending order.


**Preorder traversal** is used to create a copy of the tree. Preorder traversal is also used to get prefix expression on of an expression tree as in polish notation of expression.

**Postorder traversal** is used to delete the tree because before deleting the parent node we should delete its children nodes first. Postorder traversal is also useful to get the postfix expression of an expression tree.

**Time Complexity :**
- O(|V|+|E|) where |V| is the number of nodes,you need to traverse all nodes, |E| is number of edges.

**Space Complexity :** 
- Depends on implementation
    - Recursive - O(h) : where h is the maximum depth of your tree.
    - Iterative solution with stack has O(V)
Stack stores all the ancesstors of the node. Extra space for DFS is when the tree is skewed to left or right. Height becomes O(n).

*Extra space for DFS is likely to be more when the tree is less balanced.*

## [Dijkstra's Algorithm](../searching_traversing/Dijkastras.js)

Dijkastra's algorithm finds the shortest path tree from a single source node. 

- used to find the shortest path between two nodes in a graph.
- used to find the shortest path from one node to every other node within the same graph, provided the nodes are reachable from the starting node. 

The weighted graph can be represented by an adjacency list. Each node in the list points to an array of neighbouring nodes (which has nodeValue and weight that it carries with the previous node).
Weighted Graph in JS
```javascript
class Graph {
  constructor() {
    this.nodes = [];
    this.adjacencyList = {};
  }
}
 ```
  *Add a node to the graph* - we push it into the collection of node values and we add a new entry in the adjacency list, setting its value to an empty array.
  ```javascript
    addNode(node) {
        this.nodes.push(node); 
        this.adjacencyList[node] = [];
    }
  ```
  *Add an edge to the graph*- we push the neighboring node along with the weight into that array.
  ```javascript
  addEdge(node1, node2, weight) {
    this.adjacencyList[node1].push({node:node2, weight: weight});
    this.adjacencyList[node2].push({node:node1, weight: weight});
  }
  ```
  Finally we create a weighted graph by 
  1. Initializing the graph.
  2. Adding each node to the graph.
  3. Adding each edge with weight to the graph.

  ##### Once we run Dijkastra's algorithm just once, we can lookup our results from our algorithm again and again, without having to actually run it again. Results can be saved somewhere.

### Steps
1. From the starting node, visit the vertex with the smallest known distance/cost/weight.
2. Check each of the neighbouring nodes of the smallest cost vertex.
3. Calculate the cost for neighbouring nodes by summing the costs of edges leading from the start vertex.
4. If the cost to the vertex we are checking is lesser than the known cost of that vertex, update the least cost for that vertex.

By calculating and continually updating the shortest time to reach each node on the graph, the algorithm compiles the shortest path to the endpoint.

We need to maintain vertices to be visited in order of cost. For this we use *Priority Queue*. When a lower cost route is encountered we add it to the front.



