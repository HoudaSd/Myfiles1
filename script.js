//
// Module 4 Assignment Instructions.
//

var names = [];
var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];


var helloword = "hello";
var byeword = "good bye";


(function Speak () {
  for (var i = 0 ; i < names.length ; i++){
    if (names[i].charAt(0) == "J" || names[i].charAt(0) == "j") {
      (function byeSpeaker (name){
        console.log(byeword + " " + name);
      })(names[i]);
    } else {
      (function helloSpeaker (name){
        console.log(helloword + " " + name);
      })(names[i]);
    }
  }
})();

