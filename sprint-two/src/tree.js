// var LinkedList = function() {
//   var list = {};
//   list.head = null;
//   list.tail = null;

//   list.addToTail = function(value) {
//     var node = Node (value);
//     if(this.head === null){
//         this.head = node;
//         this.tail = node;
//     } else{
//         var cur = this.head;
//         while(cur.next){
//             cur = cur.next;
//         }
//         cur.next = node;
//         this.tail = node;
//     }
//     //return list.tail.value;
//   };

//   list.removeHead = function() {
//   };

//   list.contains = function(target) {
//   };

//   list.print = function(){

//   }

//   return list;
// };

// var Node = function(value) {
//   var node = {};

//   node.value = value;
//   node.next = null;

//   return node;
// };

// /*
//  * Complexity: What is the time complexity of the above functions?
//  */

var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  extend(newTree , treeMethods);
  return newTree;
};

function extend(to, from){
  for(var key in from){
   to[key] = from[key];
  }
}

var treeMethods = {};

treeMethods.addChild = function(value) {
  var node = Tree(value);

    this.children.push(node);

};

treeMethods.contains = function(target, cur) {
  if(cur === undefined){
    cur = this;
    console.log(cur);
  }

  for(var  i = 0; i < cur.children.length; i++){
    if(cur.children[i].value === target){
      return true;
    }else{
      var x = cur.children[i];
      var y= this.contains(target, x);
      if (y){
        return true;
      }
    }
  }
  return false;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
