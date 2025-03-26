export function announceTime() {
  // Create a SpeechSynthesisUtterance
  const now = new Date();
  announce(`Time: ${now.getHours()}:${now.getMinutes()}`);
}

export function announce(text: string) {
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "en-US";

  // Select a voice
  const voices = speechSynthesis.getVoices();
  utterance.voice = voices[0];

  // Speak the text
  window.speechSynthesis.speak(utterance);
}
