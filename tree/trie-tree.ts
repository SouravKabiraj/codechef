class TreeNode {
    public element: string;
    public used: number;
    public pointers;

    constructor(element: string) {
        this.element = element;
        this.used = 0;
        this.pointers = {};
    }

    public getWords(): string[] {
        const result = [];
        Object.keys(this.pointers).forEach(ptr => {
            if (this.pointers[ptr].used) {
                result.push(this.pointers[ptr].element);
            }
            result.push(...this.pointers[ptr].getWords());
        })
        return result;
    }
}

class TrieTree {
    getSuggestionFor(word: string): TreeNode {
        let pointer: TreeNode = this.root;
        for (let index = 0; index < word.length; index++) {
            const char = word[index];
            if (!pointer.pointers[char]) {
                pointer.pointers[char] = new TreeNode(char);
            }
            pointer = pointer.pointers[char];
        }
        return pointer;
    }

    public root = new TreeNode('');

    public search(word: string): void {
        let pointer: TreeNode = this.root;
        for (let index = 0; index < word.length; index++) {
            const char = word[index];
            if (!pointer.pointers[char]) {
                pointer.pointers[char] = new TreeNode(pointer.element + char);
            }
            pointer = pointer.pointers[char];
        }
        pointer.used++;
    }
}

const trieTree = new TrieTree();
trieTree.search('badass');
trieTree.search('badams');
trieTree.search('badaos');
trieTree.search('badpns');
trieTree.search('batman');
trieTree.search('abcde');
trieTree.search('asshole');
trieTree.search('foobar');
trieTree.search('todo');
trieTree.search('tool');

const suggestions = trieTree.getSuggestionFor('to');


console.log(suggestions.getWords());
