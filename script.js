let voices = new SpeechSynthesisUtterance();

let voiceTypes = [];

let voiceChoice = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () => {
  voiceTypes = window.speechSynthesis.getVoices();
  voices.voice = voiceTypes[0];
  voiceTypes.forEach(
    (voice, i) => (voiceChoice.options[i] = new Option(voice.name, i))
  );
};

voiceChoice.addEventListener("change", () => {
  voices.voice = voiceTypes[voiceChoice.value];
});

document.querySelector("button").addEventListener("click", () => {
  voices.text = document.querySelector("textarea").value;
  window.speechSynthesis.speak(voices);
});
