function chunkArrayInGroups(arr, size) {

  var bunk = [];
  
 for (x = 0; x<arr.length; x+=size){
   bunk.push(arr.slice(x, x+size));
 }
  return bunk;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
