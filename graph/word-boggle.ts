class Point {
    public x: number;
    public y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}

function isLinkedWord(boggle: string[][], word: string, i: number, point: Point): boolean {
    if (i >= word.length) {
        return true;
    } else if (point.x < 0 || point.x >= boggle.length || point.y < 0 || point.y >= boggle[point.x].length) {
        return false;
    } else {
        if (word[i] === boggle[point.x][point.y]) {
            const wordBoggle1 = isLinkedWord(boggle, word, i + 1, new Point(point.x + 1, point.y));
            const wordBoggle2 = isLinkedWord(boggle, word, i + 1, new Point(point.x + 1, point.y - 1));
            const wordBoggle3 = isLinkedWord(boggle, word, i + 1, new Point(point.x + 1, point.y + 1));
            const wordBoggle4 = isLinkedWord(boggle, word, i + 1, new Point(point.x - 1, point.y));
            const wordBoggle5 = isLinkedWord(boggle, word, i + 1, new Point(point.x - 1, point.y - 1));
            const wordBoggle6 = isLinkedWord(boggle, word, i + 1, new Point(point.x - 1, point.y + 1));
            const wordBoggle7 = isLinkedWord(boggle, word, i + 1, new Point(point.x, point.y + 1));
            const wordBoggle8 = isLinkedWord(boggle, word, i + 1, new Point(point.x, point.y - 1));
            return wordBoggle1 || wordBoggle2 || wordBoggle3 || wordBoggle4 || wordBoggle5 || wordBoggle6 || wordBoggle7 || wordBoggle8;
        } else {
            return false;
        }
    }
}

function getAllWordBoggle(boggle: string[][], words: string[]) {
    words.forEach(word => {
        for (let i = 0; i < boggle.length; i++) {
            for (let j = 0; j < boggle[i].length; j++) {
                if (isLinkedWord(boggle, word, 0, new Point(i, j))) {
                    console.log(word);
                }
            }
        }
    })
}


const dictionary = ["GEEKS", "FOR", "QUIZ", "GO"];
const boggle =
    [
        ['G', 'I', 'Z'],
        ['U', 'E', 'K'],
        ['Q', 'S', 'E']
    ];


getAllWordBoggle(boggle, dictionary);