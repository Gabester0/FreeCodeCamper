
function titleCase(str) {

  var dogged = str.toLowerCase().split(" ");
  
  var result = dogged.map(function(val){
                          
   return val.replace(val.charAt(0), val.charAt(0).toUpperCase());                         
  

});
  return result.join(" ");
}
titleCase("I'm a little tea pot");
Projects
