var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var returnedStack = {};
  returnedStack.storage =  {};
  returnedStack.last = 0;
  extend(stackMethods, returnedStack);
  return returnedStack;
};

var stackMethods = {
    size : function (){
//       console.log(this)
      return this.last;
    },
    push : function(value){
      this.storage[this.last]=value;
      this.last+=1;
      return this.last;
    },
    pop : function(){
      if(this.last === 0){
        return -1;
      }
      this.last--;
      var temp = this.storage[this.last];
      delete this.storage[this.last];
      return temp;
    }
};

function extend(from, to){
  for(var key in from){
    to[key] = from[key];
  }
}




/*
 //  Functions to be implemented
    // push(item)
    // pop()
    // peek()
    // isEmpty()
    // printStack()
*/