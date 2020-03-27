const dp = {}

function isSentance(text: string, dictionary: string[]): boolean {
    if (dp[text]) {
        return dp[text];
    }
    if (dictionary.indexOf(text) >= 0) {
        dp[text] = true;
        return true;
    } else if (text.length == 1) {
        dp[text] = false;
        return false;
    } else {
        for (let i = 1; i < text.length - 1; i++) {
            const _text: string = text;
            const prolog = _text.slice(0, i);
            const postlog = _text.slice(i, _text.length);
            if (isSentance(prolog, dictionary) && isSentance(postlog, dictionary)) {
                dp[text] = true;
                return true;
            }
        }
        dp[text] = false;
        return false;
    }
}

console.log(isSentance('iknowe', ['i', 'know', 'kno']));
