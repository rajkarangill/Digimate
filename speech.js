const synth = window.speechSynthesis;

const textToSpeech = (string) => {
  let voice = new SpeechSynthesisUtterance(string);
  voice.text = string;
  voice.lang = "en-ca";
  voice.volume = 2;
  voice.rate = 0.9;
  voice.pitch = 2;
  synth.speak(voice);
}