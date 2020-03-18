var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = [];
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  var x = this._storage ;
  if(x.indexOf(item)=== -1){
    x.push(item)
  }else{
     return "this item already exist"}
};

setPrototype.contains = function(item) {
  var x = this._storage ;
 if(x.indexOf(item) !== -1){
   return true
 }else{
   return false
 }
};

setPrototype.remove = function(item) {
  var index = this._storage.indexOf(item) ;
  if(index !== -1){
    this._storage.splice(index, 1)
  }

};

/*
 * Complexity: What is the time complexity of the above functions?
 */
