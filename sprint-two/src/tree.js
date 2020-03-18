class Tree{
  constructor(value){
      this.data = value;
      this.childs = [] ;
  }
  add (value, target){

      if(this.data === target){
          this.childs.push(new Tree(value));
          return;
      }else{
          for(var i  = 0 ; i < this.childs.length; i++){
              this.childs[i].add(value, target);
          }
      }
  }
  contain(target){
      if(this.data === target){
          return true;
      }
      for( var i = 0; i < this.childs.length ; i++){
          if(this.childs[i].contain(target)){
              return true
          }
      }
      return false;
  }
}

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
