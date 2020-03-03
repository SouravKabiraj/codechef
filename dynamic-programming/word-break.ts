function isSentance(text: string, dictionary: string[]): boolean {
    if (dictionary.indexOf(text) >= 0) {
        return true;
    } else if (text.length == 1) {
        return false;
    } else {
        for (let i = 1; i < text.length - 1; i++) {
            const _text: string = text;
            const prolog = _text.slice(0, i);
            const postlog = _text.slice(i, _text.length);
            if (isSentance(prolog, dictionary) && isSentance(postlog, dictionary)) {
                return true;
            }
        }
        return false;
    }
}

console.log(isSentance('iknowe', ['i', 'know', 'kno']));
