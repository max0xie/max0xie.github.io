
// 示例：调用通义千问 API 进行翻译
export async function translateWithQwen(text) {
    try {
        const response = await fetch('https://gpt-xj.xiejunjie27-gpt.workers.dev/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ input: text })
        });
        const data = await response.json();
        return data.output || '[翻译失败]';
    } catch (error) {
        console.error('Qwen translation error:', error);
        return '[翻译错误]';
    }
}
