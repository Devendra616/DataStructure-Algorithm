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

BFS travels from left to right, level by level starting from the root node.
BFS uses *additional memory* as we need to keep track of the child nodes.

Good to find *shortest path* because we traverse closer nodes first.

**Time Complexity :**
- O(n)

## [Depth First Search (DFS)](../searching_traversing/DFS.js)
DFS follows one branch of the tree to travel last leaf node of the tree. Then it moves to the next ancesstor until it does not have any unexplored child.

Good to find *if a path exists* between two nodes.
