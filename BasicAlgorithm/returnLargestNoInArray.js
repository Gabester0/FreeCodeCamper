

function largestOfFour(arr) {
  // You can do this!
  var bigFour = [];
    for (x=0; x<4; x++){
        if ((arr[x][0] > arr[x][1]) && (arr[x][0] > arr[x][2]) && (arr[x][0] > arr[x][3])) { bigFour.push(arr[x][0]); }
      else if ((arr[x][1] > arr[x][2]) && (arr[x][1] > arr[x][3])) { bigFour.push(arr[x][1]); }
     else if (arr[x][2] > arr[x][3]) { bigFour.push(arr[x][2]); }
      else { bigFour.push(arr[x][3]); }
    }
  return bigFour;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
