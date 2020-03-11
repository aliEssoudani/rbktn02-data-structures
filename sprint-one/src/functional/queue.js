var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
     var last=0;
  someInstance.enqueue = function(value) {
    var tempObj={};
    for(var key in storage){
      var key2=parseInt(key)+1;
      tempObj[key2]=storage[key];
    }
    tempObj[0]=value;
    storage=tempObj;
    last++;
    return last;
  };

  someInstance.dequeue = function() {
    if(last===0){
      return -1;
    }
    last--
   var contain=storage[last];
   delete storage[last];
   return contain;
  };

  someInstance.size = function() {
    return last
  };

  return someInstance;
};
