//Completed 3/11/18

function rot13(str) { 
  var code = []; 
  var codeT = [];
  var codeE = [];
  for (x = 0; x < str.length; x++){
    code.push(str.charCodeAt(x) );
  }
  
  for (y=0; y<str.length; y++){
    if (code[y] === 32 || code[y]=== 33 || code[y]=== 46 || code[y]=== 63) {codeT.push(code[y]); 
     } else if (code[y]>77){ codeT.push(code[y]-13);
     } else { 
       codeT.push(code[y]+13);
     }
     }
  
  for (z=0; z<codeT.length; z++){
    codeE.push(String.fromCharCode(codeT[z]));
  }
  var final = codeE.join("");
  return final;
}

// Change the inputs below to test
