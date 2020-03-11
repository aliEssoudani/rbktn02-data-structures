class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.last = 0;
    this.storage = {};
  }

  size(){
    return this.last;
  }

  dequeue(){
    if(this.last === 0){
      return -1;
    }
    this.last--;
    var tmp = this.storage[this.last];
    delete this.storage[this.last];
    return tmp;
  }

  enqueue (value){
    var tempObj = {};
    for(var key in this.storage){
      var key2 = parseInt(key) + 1;
      tempObj[key2] = this.storage[key];
    }
    tempObj[0] = value;
    this.last++;
    this.storage = tempObj;
    return this.last;
  }

  printQueue(){
    return this.storage;
  }

}
