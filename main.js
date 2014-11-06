function preamble(name) {
  return "Your name is " + name + "!";
}
// Second Refactor:
function cheerFor(name){
  return name.split('').map(function(letter){
    return "Give me a... " + letter + "!"
  }).join("\n");

  // This is equivalent to:
  // var nameArray = name.split(''); // ['A', 'L']
  // var cheersArray = nameArray.map(function(letter){
    // return "Give me a... " + letter + "!"
  // });
  // return cheersArray.join("\n");
}

// First Refactor:
// function cheerFor(name){
//   var cheer = [];
//   for(var i=0; i < name.length; i++){
//     cheer.push("Give me a... " + name[i] + "!");
//   }
//   return cheer.join("\n");
// }

// Original, developed test-first:
// function cheerFor(name){
//   var cheer = "";
//   for(var i=0; i < name.length; i++){
//     cheer += "Give me a... " + name[i] + "!"
//     if( i < name.length - 1){
//       cheer += "\n"
//     }
//   }
//   return cheer;
// }

function namesWithHyphen(name){
  return name;
}

function namesWithSpaces(name) {
  return name;
}

function twiceOfFour(x) {
  return x * x;
}
function quadOfTen(y) {
  return y*y*y*y;
}

function divisionOfTwo(z) {
  return z / 2;
}

function lowercaseName(name) {
  return name.toLowerCase();
}

function lettersWithAn(letters){
	for (var i = 0; i < letters.length; i++) {
  	 return "an " + letters[i];
  }
}