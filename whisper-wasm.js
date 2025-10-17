
// 伪代码示例：使用 webkitSpeechRecognition 进行语音识别（英文）
export function startRecognition(onResult, onError) {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
        onError('SpeechRecognition API not supported');
        return;
    }
    const recognition = new SpeechRecognition();
    recognition.lang = 'en-US';
    recognition.continuous = true;
    recognition.interimResults = true;

    recognition.onresult = (event) => {
        const transcript = Array.from(event.results)
            .map(result => result[0].transcript)
            .join('');
        onResult(transcript);
    };

    recognition.onerror = (event) => onError(event.error);
    recognition.onend = () => console.log('Speech recognition ended');

    recognition.start();
    return recognition;
}

export function stopRecognition(recognition) {
    if (recognition) recognition.stop();
}
