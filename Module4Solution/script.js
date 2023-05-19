var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

for (var i = 0; i < names.length; i++) {
  var firstLetter = names[i][0].toLowerCase();

  if (firstLetter === "j") {
    console.log("Good Bye " + names[i]);
  } else {
    console.log("Hello " + names[i]);
  }
}

(function(window) {
  var byeSpeaker = {}; // Create byeSpeaker object

  var speakWord = "Good Bye"; // Do not attach speakWord to byeSpeaker

  byeSpeaker.speak = function(name) { // Attach speak method to byeSpeaker
    console.log(speakWord + " " + name);
  };

  window.byeSpeaker = byeSpeaker; // Expose byeSpeaker to the global scope
})(window);
