/*********************
** NODE
**********************/

class Node {
  
  constructor(data, leftNode = null, rightNode = null) {
    this.data = data;
    this.leftNode = leftNode;
    this.rightNode = rightNode;
  }

  insert(newValue) {
    if (newValue <= this.data) {
      if (this.leftNode === null) {
        this.leftNode = new Node(newValue);
      } else { 
        return this.leftNode.insert(newValue);
      }
    } else {
      if (this.rightNode === null) {
        this.rightNode = new Node(newValue);
       } else {
        return this.rightNode.insert(newValue);
       }
    }
  }

  find(value) {
    if (value === this.data) {
      return this;
    } else if (value < this.data) {
      if (this.leftNode === null) {
        return null;
      } else {
        return this.leftNode.find(value);
      }
    } else {
      if (this.rightNode === null) {
        return null;
       } else {
        return this.rightNode.find(value);
       }
    }
  }
}

/*********************
** TREE
**********************/
class Tree {
  constructor(array = [4,2,9,5,1,8,9]) {
    this.array = array;
    this.rootNode = new Node(this.array[0]);
    this.initialize();
  }

  initialize() {
    if (this.array.length > 1) {
      for (let i = 1; i < this.array.length; i++) {
        this.insert(this.array[i]);
      }
    }
  }

  // Print the tree in the console
  to_s(node = this.rootNode) {
    return 'hello';
  }

  insert(newValue) {
    this.rootNode.insert(newValue);
  }

  find(value) {
    return this.rootNode.find(value);
  }
}

const tree = new Tree();
console.log(tree);
console.log(tree.find(8));
console.log(tree.find(0));
