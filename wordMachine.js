class WordMachine {
    constructor(input) {
        this.input = input;
        this.numberOfChars = input.length;
    }

    convertToWord() {
        const numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen"];
        const outputAsWord = numbers[this.numberOfChars];
        if (outputAsWord) {
            return outputAsWord;
        } else {
            return "This word is too long...";
        }

    }

    isMajorityLowerCase() {
        const length = this.numberOfChars;
        let lowerCount = 0;
        let upperCount = 0;
        for (let i = 0; i < length; i++) {
            const char = this.input[i]
            if (char == char.toUpperCase()) {
                upperCount++;
            }
            if (char == char.toLowerCase()) {
                lowerCount++;
            }
        }

        if (lowerCount >= upperCount) {
            return true;
        }
        if (upperCount > lowerCount) {
            return false;
        }
    }

    createOutput() {
        let answer = this.convertToWord();
        const isLower = this.isMajorityLowerCase();

        if (!isLower) {
            return answer.toUpperCase();
        }

        return answer;
    }
}

module.exports = WordMachine;