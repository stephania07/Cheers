var $form = document.querySelector('#main');
var $button = $form.querySelector("input[type='button']");
$(button).on('click', function(event) {
	event.preventDefault();
  var $input = document.querySelector('#name').value;
  var cheerText = fullCheer($input);
  displayCheer(cheerText);
});
function displayCheer(cheerText){
  var $div = document.querySelector('#cheer');
  $div.innerHTML = cheerText;
}

function preamble(name) {
  return "Your name is " + name + ".";
}
// Second Refactor:
function cheerFor(name){
  return $.map(name.split(''), function(letter){
    return "Give me a... " + letter.toUpperCase();
  }).join("<br>");
}
  // This is equivalent to:
//var nameArray = name.split(''); // ['A', 'L']
// var cheersArray = nameArray.map(function(letter){
//   return "Give me a... " + letter + "!"
//   });
//    return cheersArray.join("<br>");
//}
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

function fullCheer(name) {
  return preamble(name) + "<br>" + letters(name) + "<br>" + afterword(name);
}
function afterword(name){
  return name + " is great!";
}
function letters(name) {
  return $.map(name.toUpperCase().split(''), function(letter){ 
      if(letter === 'A' || letter === 'E' || letter === 'F' ||
   	   letter === 'H' || letter === 'I' || letter === 'L' ||
   	   letter === 'M' || letter === 'N' || letter === 'O' ||
   	   letter === 'R' || letter === 'S' || letter === 'X') {
        return "Give me an... "  + letter;
      } else {
        return "Give me a... "  + letter;
      }
    }).join("<br>"); 
}



