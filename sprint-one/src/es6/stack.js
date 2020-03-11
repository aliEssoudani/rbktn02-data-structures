class Stack{
  constructor(){
    this.last = 0;
    this.storage = {};
  }

  size(){
    return this.last;
  }

  push(value){
    this.storage[this.last] = value;
    this.last++;
    return this.last;
  }

  pop(){
    if(this.last === 0){
      return -1;
    }
    this.last--;
    var temp = this.storage[this.last];
    delete this.storage[this.last];
    return temp;
  }
}
