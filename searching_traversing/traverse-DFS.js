/* Implement DFS in Inorder, Preorder and PostOrder */

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

    DFS_Inorder(currentNode = this.root, list = []) {

        if(currentNode.left) {
            this.DFS_Inorder(currentNode.left,list);
        }    
        list.push(currentNode.value);
        if(currentNode.right) {
            this.DFS_Inorder(currentNode.right,list);
        }    
    
        return list;
    }

    DFS_Preorder(currentNode = this.root, list = []) {

        if(currentNode) {
            list.push(currentNode.value);
        }    
        if(currentNode.left) {
            this.DFS_Preorder(currentNode.left,list);
        }
        if(currentNode.right) {
            this.DFS_Preorder(currentNode.right,list);
        }    
    
        return list;
    }

    DFS_Postorder(currentNode = this.root, list = []) {

        if(currentNode.left) {
            this.DFS_Postorder(currentNode.left,list);
        } 
        if(currentNode.right) {
            this.DFS_Postorder(currentNode.right,list);
        }  
        list.push(currentNode.value);  
    
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
bst.DFS_Inorder();
bst.DFS_Preorder();
bst.DFS_Postorder();
