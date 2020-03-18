

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //this._storage[index] = v;
  var node = {key : k, value : v, next: null}
  if(this._storage[index] === undefined) {
    this._storage[index] = node;
  } else{
    var x = this._storage[index];
    //var addNode = {value : v, key : k , next : null}
    if(x.key === k){
      x.value = v;
      this._storage[index] = x;
      return;
    }
    x.next = node;
    this._storage[index] = x;
  }

};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var x = this._storage[index];
  if(x.key === k){
    return x.value;
  } else{
    while(x.next){
      x = x.next;
      if(x.key === k){
        return x.value;
      }
    }
    if(x.key === k){
      return x.value;
    }
  }
  //return -1;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage[index] = undefined;
};
//////////////////////////////////////////////////es6 and Map.


function hash(key, size) {
  var hash = 0;
  for (var i = 0; i < key.length; i++) {
    hash = key.charCodeAt(i);
  }
  return hash % size;
}
class HashTable {
  constructor(size) {
    this.size = size;
    this.storage = new Array(this.size);
    for (let i = 0; i < this.storage.length; i++) {
      this.storage[i] = new Map();
    }
  }
  insert(key, value) {
    var index = hash(key, this.size);
    this.storage[index].set(key, value);
  }
  search(key) {
    var index = hash(key, this.size);
    return this.storage[index].get(key);
  }
  delete(key) {
    var index = hash(key, this.size);
    var tempValue = this.search(key);
    this.storage[index].delete(key);
    return tempValue;
  }
}

/*
 * Complexity: What is the time complexity of the above functions?
 */


