function formAPalindrome(text: string, l: number, h: number): number {
    if (h < l) {
        return 0;
    }
    if (text.charAt(l) === text.charAt(h)) {
        return formAPalindrome(text, l + 1, h - 1);
    } else {
        const way1 = formAPalindrome(text, l + 1, h) + 1;
        const way2 = formAPalindrome(text, l, h - 1) + 1;
        return Math.min(way2, way1);
    }
}

console.log(formAPalindrome('kladac', 0, 5));
