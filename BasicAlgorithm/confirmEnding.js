//Completed 3/3/18

function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
var bar = target.length -1;
  str = str.split(" ");
    var l = str.length -1;
    var m = str[l].length-1;
    var q = str[l];
    q = q.split("");
  for (m; m> bar; m-- ){
    q.shift();
  }
  
  q = q.join("");
  
if (q === target) {
  return true; } 
  else { return false; } 
  
} 

confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification");
