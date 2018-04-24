//Completed 3/10/18

function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  var ark = arr.sort();
  if ((ark[0]>=20) && (ark[0]> ark[1])) { ark.push(ark[0]); ark.shift(); }
  var x=0;
  for (x; ark[x] < num; x++){
    if (ark[x] < num){  } else if(ark[x]===num){ x=x-1; } else { return x; } }
 return x;
}

getIndexToIns([5, 3, 20, 3], 5);
