//Reverse a String
//Completed 2/26/18


function reverseString(str) {
//use .length to ascertain how many char are in str//x//
  //use for loop to assign each char in string as a separate [] elements in a
  //array
  //Then reverse the order of these 
  //then return these to string form and display. 
// str.length = x;
/*  for (x = 0; x < (str.length); x++){
  }*/
  var reversed = str.split("");

  var flipString = [];
  
  flipString = reversed.reverse();
  
  return flipString.join("");
  
}

reverseString("A Man a Plan A Canal Panama");
