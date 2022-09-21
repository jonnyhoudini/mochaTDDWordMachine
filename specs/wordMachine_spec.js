const assert = require('assert');
const WordMachine = require('../wordMachine.js')

describe('WordMachine', function () {
    it('should have an input', function () {
        const wordMachine = new WordMachine('testing');
        const actual = wordMachine.input;
        assert.strictEqual(actual, 'testing');
    });
    it('should be able to output the length of input string as an integer', function () {
        const wordMachine1 = new WordMachine('cast');
        assert.strictEqual(wordMachine1.numberOfChars, 4);
    })
    it('should return the length of the input as a word', function () {
        const wordMachine2 = new WordMachine('celebrity');
        assert.strictEqual(wordMachine2.convertToWord(), "nine");
    })
    it('should return an error message if the word is too long', function () {
        const wordMachine3 = new WordMachine('supercalifragilisticexpiallitrocious');
        assert.strictEqual(wordMachine3.convertToWord(), "This word is too long...");
    })
    it('should check if majority of chars in input are uppercase or lowercase', function () {
        const wordMachine4 = new WordMachine('LiONkeePER');
        assert.strictEqual(wordMachine4.isMajorityLowerCase(), false);
    })
    it('should know if majority of chars in input are lowercase', function () {
        const wordMachine5 = new WordMachine('simplE');
        assert.strictEqual(wordMachine5.isMajorityLowerCase(), true);
    })
    it('should return an uppercase word if maj of chars in input are uppercase', function () {
        const wordMachine6 = new WordMachine("DiNNER");
        assert.strictEqual(wordMachine6.createOutput(), "SIX")
    });
    it('should return a lowercase word if maj of chars in input are lowercase', function () {
        const wordMachine7 = new WordMachine("slEEpless");
        assert.strictEqual(wordMachine7.createOutput(), "nine");
    });
    it('should return an error message if input has more than 15 letters', function () {
        const wordMachine8 = new WordMachine("AntiDisEstablishmentarianIsm");
        assert.strictEqual(wordMachine8.createOutput(), "This word is too long...");
    });
});