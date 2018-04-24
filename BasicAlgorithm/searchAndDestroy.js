
function destroyer(arr) {
  // Remove all the values
  var arrk= Array.from(arguments).slice(1); 
 return arr.filter(function(val) {
  return !arrk.includes(val);                
   });     
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
