class Node {
  constructor(data, left = null, right = null){
      this.data = data;
      this.left = left ;
      this.right = right;
  }
}


  class BinarySearchTree {
    constructor(){
        this.root = null ;
    }

  addChild(data) {

    var node = this.root;
    //  if the root is null , e will add the first node wich is the parent or the root
    if(node === null){
        this.root = new Node(data);
    }else{
        var check = function(node){
            if(data < node.data){
                if(node.left === null){
                    node.left = new Node(data)
                }else if(node.left !==null){
                    return check(node.left)
                }
            }else if(data > node.data){
                if(node.right === null){
                    node.right = new Node(data)
                }else if(node.right !== null){
                    return check(node.right)
                }
            }else{
                // the value is equal to our node value
                return null ;
            }
        };
        return check(node)
    }
  }
  containChild(data) {
    var current = this.root ;
    while(current){
        if(data === current.data) {
            return true ;
        }
        // the search will be easier because our tree is
        // kind of sorted so everytime we will need just to compare the input with the current data
        // than we will decide in what part we will search on
        if(data < current.data){
            current = current.left
        }else{
            current = current.right;
        }
    }

    return false;
  }
}









// var BinarySearchTree = function(value) {

//     var newTree = {};
//     newTree.value = value;

//     // your code here
//     newTree.childrenLeft = [];  // fix me
//     newTree.childrenRight = [];
//     extend(newTree , treeMethods);
//     return newTree;

// };
// function extend(to, from){
//   for(var key in from){
//    to[key] = from[key];
//   }
// }

// var treeMethods = {};


// treeMethods.addChild = function(value){

// }

/*
 * Complexity: What is the time complexity of the above functions?
 */
