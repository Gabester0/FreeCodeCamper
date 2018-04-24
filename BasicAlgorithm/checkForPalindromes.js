//Completed 2/28/18
function palindrome(str) {
  
  var str2 = str.toLowerCase();

  var regex = /a|b|c|d|e|f|g|h|i|j|k|l|m|n|o|p|q|r|s|t|u|v|w|x|y|z|1|2|3|4|5|6|7|8|9|0/g;
  var str3 = str2.match(regex);
  var str4 = str3.join("");
  var str5 = str4.split("");
  var rts = str5.reverse();
  var job = rts.join("");
 // return str4;
  if (str4 === job ){
    return true;
  } else {
    return false;
  }
} 

palindrome("eye");
Projects
