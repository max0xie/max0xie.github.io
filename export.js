
// 将识别结果和翻译内容导出为文本文件
export function exportText(rawText, translatedText) {
    const content = `原文：\n${rawText}\n\n译文：\n${translatedText}`;
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'translation_output.txt';
    a.click();

    URL.revokeObjectURL(url);
}
