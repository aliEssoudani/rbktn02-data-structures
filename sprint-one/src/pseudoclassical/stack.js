var Stack = function() {
  this.last=0;
  this.storage={};
};


Stack.prototype.size=function(){
  return this.last;
}
Stack.prototype.push=function(value){
  this.storage[this.last]=value;
  this.last++;
  return this.last;
}
Stack.prototype.pop=function(){
  if(this.last=== 0){
    return -1;
  }
  this.last--;
  var temp=this.storage[this.last];
  delete this.storage[this.last];
  return temp;
}




