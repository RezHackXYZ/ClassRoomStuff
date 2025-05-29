import { PlayingAnnouncement } from "./announcerData.svelte.js";

export function AnnounceUsingTTS(text) {
	PlayingAnnouncement.v = true;

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.5;
    utterance.onend = () => {
        PlayingAnnouncement.v = false;
    };
    window.speechSynthesis.speak(utterance);

	
}
