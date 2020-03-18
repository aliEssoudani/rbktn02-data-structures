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
class Node{
  constructor(data, next = null){
      this.data = data;
      this.next = next;
  }
}

class LinkedList{
  constructor(){
      this.head = null;
      this.size = 0;
  }
  // add node at first
  addatFirst(data){
   this.head = new Node(data, this.head);
   this.size++
  }
  // add node at last
  addatLast(data){
   var node = new Node(data);
   let current;
   if(!this.head){
      this.head = node;
   }else{
      current = this.head;
      while(current.next){
       current = current.next
      }
      current.next = node;



   }
   this.size++;

  }
  // insert node at index
  insertAtInd(data, index){
      if(index > 0 && index > this.size){
          return
      }
      if(index === 0){
       this.head = new Node(data, this.head)
       return

      }
      const node  = new Node(data);
      let current,previous;
      current = this.head;
      let count = 0;
      while(count < index){
          previous = current;
          current = current.next;
          count++;

      }
      node.next = current;
      previous.next = node
      this.size++
  }
  // getat(inde)
  getat(index){
   let current = this.head;
   let count = 0;

   while(current){
       if(count == index){
           console.log(current.data)

       }
       count++;
       current = current.next
   }
   return ;
  }
  // print data
  prinList(){
      let current = this.head;
      while(current){
          console.log(current.data);
          current = current.next;
      }
  }
}