var Stack = function() {
  var last = 0;
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};


  // Implement the methods below
  someInstance.push = function(value) {
    storage[last] = value;
    last++;
    return last;
  };

  someInstance.pop = function() {
    if(last === 0){
      return -1;
    }
    last--;

    var temp = storage[last];
    delete storage[last];
    return temp;
  };

  someInstance.size = function() {
    return last;
  };

  someInstance.printStack = function(){
    return storage;
  }

  return someInstance;
};

