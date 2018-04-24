function factorialize(num) {
  var fac = 1;
  for (x = num; x > 0; x--){
  
    fac *= x;
  }
  return fac;
  //Now we need to multiply each array entry against itself and return the result
}

factorialize(5);
//Completed 2/26/18
