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
          }
      }
  }
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
