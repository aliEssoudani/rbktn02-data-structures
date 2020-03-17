

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



/*
 * Complexity: What is the time complexity of the above functions?
 */


