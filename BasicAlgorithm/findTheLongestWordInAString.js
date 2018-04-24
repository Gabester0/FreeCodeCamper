
function findLongestWord(str) {
  var arr = [];
  var val = (str.match(/ /g)).length; 
  arr = str.split(" ");
  //now we have the lenth (val) and the string is split into an array(arr)
  //so we can use a for loop to compare lenths
  var a;
  var b;
  var winner = 1;
  var charLength = [];
  for (x = 0; x<=val; x++) {
   a = arr[x];
    charLength.push(a.length);
  
    if (charLength[x] > winner){
      winner=charLength[x];
    } else {
      
    }
  }

 

  return winner;
//  now we just need to use a loop to find the highest value in charlength and return it
}

findLongestWord("The quick brown fox jumped over the lazy dog");
Projects
