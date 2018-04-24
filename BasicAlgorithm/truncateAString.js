function truncateString(str, num) {
  // Clear out that junk in your trunk
  var strTrunk="";
  if ((str.length>num) && (num > 3)){
    strTrunk = str.slice(0, (num-3)) + "...";
  } else if (str.length <= num){
    strTrunk=str;
  }
  else {
    strTrunk = str.slice(0, num) + "...";
  }
  
  return strTrunk;
}

truncateString("A-tisket", 8);
