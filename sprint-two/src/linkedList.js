var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var node = Node (value);
    if(this.head === null){
        this.head = node;
        this.tail = node;
    } else{
        var cur = this.head;
        while(cur.next){
            cur = cur.next;
        }
        cur.next = node;
        this.tail = node;
    }
    //return list.tail.value;
  };

  list.removeHead = function() {
    if(this.head === null){
      return
    }else{
      var cur= this.head;
      this.head = this.head.next;
      return cur.value;
    }
  };

  list.contains = function(target) {
    if(target === this.head.value || target === this.tail.value){
      return true;
    }else if(this.head === null){
      return false;
    }else{
      var cur = this.head;
      while(cur.next){
        cur = cur.next;
        if(cur.value === target){
          return true;
        }
      }

    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
