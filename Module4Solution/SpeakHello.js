(function(window) {
  var helloSpeaker = {}; // Create helloSpeaker object

  var speakWord = "Hello"; // Do not attach speakWord to helloSpeaker

  helloSpeaker.speak = function(name) { // Attach speak method to helloSpeaker
    console.log(speakWord + " " + name);
  };

  window.helloSpeaker = helloSpeaker; // Expose helloSpeaker to the global scope
})(window);
