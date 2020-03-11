var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var returnedQueue = {};
  returnedQueue.storage = {};
  returnedQueue.last = 0;
  extend(queueMethods, returnedQueue);
  return returnedQueue;
};

function extend(from, to){
  for(var key in from){
    to[key] = from[key];
  }
}

var queueMethods = {};


queueMethods.size = function() {
  return this.last;
}

queueMethods.enqueue = function(value){
  this.storage[this.last] = value;
  var temp =  {};
  for(var key in this.storage){
    var key2 = parseInt(key) + 1;
    temp[key2] = this.storage[key];
  }
  temp[0] = value;
  this.storage = temp;
  this.last++;
  return this.last;
}

queueMethods.dequeue = function(){
  if(this.last === 0){
    return -1;
  }
  this.last--;
  var temp = this.storage[this.last];
  delete this.storage[this.last];
  return temp;
}





