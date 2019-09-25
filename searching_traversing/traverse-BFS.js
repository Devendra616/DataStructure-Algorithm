/* Implementation of BFS - Breadth First Search/Traverse */

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);

        if(this.isEmpty()) {
            this.root = newNode;
            return this;
        }
        let currentNode = this.root;

        while(currentNode !== null) {
            if(value < currentNode.value) {
                if(!currentNode.left) {
                    currentNode.left = newNode;
                    return this;
                }
                currentNode = currentNode.left;
            } else {
                if(!currentNode.right) {
                    currentNode.right = newNode;
                    return this;
                }
                currentNode = currentNode.right;
            }
        }        
    }

    isEmpty() {
        return this.root === null;
    }

    lookup(value) { 
        if(this.isEmpty()) {
            return false;
        } 

        let currentNode = this.root;
        while(currentNode !== null ){
            if(value === currentNode.value) {
                return currentNode;
            }

            if(value < currentNode.value) {
                currentNode = currentNode.left;
            } else {
                currentNode = currentNode.right;
            }            
        }
        return false;
    }

    /* Recursive Way */
   //passed default inital values for queue as array having root, blank list array
  BFS_recursive(queue = [this.root],list = []) {
    if(!queue.length) {
        return list;
    }

    let currentNode = queue.shift();
    list.push(currentNode.value);
    if(currentNode.left) {
        queue.push(currentNode.left);
    }
    if(currentNode.right) {
        queue.push(currentNode.right);
    }
    return this.BFS_recursive(queue, list);
  }

  /* Iterative Way */
 BFS() {
    //add the root as first node
    let currentNode = this.root;
    let list  = [];
    let queue = [];
    queue.push(currentNode);

    while(queue.length > 0) {
        //remove from front of queue
        currentNode = queue.shift();
        list.push(currentNode.value);
        //add left child
        if(currentNode.left) {
            queue.push(currentNode.left);
        }
        //add left child
        if(currentNode.right) {
            queue.push(currentNode.right);
        }        
    }
    return list;
 }
      
}

const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(2);
bst.insert(14);
bst.insert(4);
bst.insert(5);
bst.insert(3);
bst.insert(20);
bst.insert(16);
bst.insert(12);
bst.lookup(16);
bst.BFS();
bst.BFS_recursive();

/* Time Complexity : O(n) */