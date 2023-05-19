(function(window) {
  var byeSpeaker = {}; // Create byeSpeaker object

  var speakWord = "Good Bye"; // Do not attach speakWord to byeSpeaker

  byeSpeaker.speak = function(name) { // Attach speak method to byeSpeaker
    console.log(speakWord + " " + name);
  };

  window.byeSpeaker = byeSpeaker; // Expose byeSpeaker to the global scope
})(window);
