export function AnnounceUsingTTS(text) {
    window.speechSynthesis.speak(
        Object.assign(new SpeechSynthesisUtterance(text), {
            rate: 0.5,
        }),
    );
}