var Queue = function() {
  this.last=0;
  this.storage={};
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};


Queue.prototype.size=function(){
  return this.last;
};
Queue.prototype.enqueue=function(value){
  // if(value === undefined){
  //   return;
  // }
  var contain={};
  for(var key in this.storage){
    var key2=parseInt(key) + 1
    contain[key2]=this.storage[key];
  }
  contain[0]=value;
  this.storage=contain;
  this.last++;
  return this.last;
}

Queue.prototype.dequeue=function(){
  if(this.last === 0){
    return -1
  }
  this.last--;
  var temp=this.storage[this.last];
  delete this.storage[this.last];
  return this.last;
}