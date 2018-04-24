//Completed 3/8/18

function mutation(arr) {
  var a = arr[0].toLowerCase();
  var b = arr[1].toLowerCase();
  var k = [];
  
  for (x = 0; x<b.length; x++) {
  k.push(a.indexOf(b[x]));   
  }
  
  return ((k.indexOf(-1)) === -1);
}
mutation(["Hello", "hello"]);
