var Stack = function() {
  // var returnedStack= function(){};
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  // returnedStack.prototype.last=0;
  this.last=0;
  this.storage={};
  // returnedStack.prototype.storage={};
  //  return returnedStack;
};


Stack.prototype.size=function(){
  return this.last;
}
Stack.prototype.push=function(value){
  this.storage[this.last]=value;
  this.last++;
  return this.last;
}
Stack.prototype.pop=function(){
  if(this.last=== 0){
    return -1;
  }
  this.last--;
  var temp=this.storage[this.last];
  delete this.storage[this.last];
  return temp;
}





