module.exports = function (args) {
    const PARAGRAPHS = args?.paragraphs || 1; // Number of paragraphs to generate
    const LETTERS = args?.letters || 'abcdefghijklmnopqrstuvwxyz'; // String of letters to generate
    const SEPATATOR = args?.separator == null ? ' '  : args?.separator ; // Character to use as separator between words. NOTE: This should be a single character
    const PARAGRAPHLENGTH = args?.paragraphLength || 100; // Number of characters per paragraph
    const WORDMINLENGTH = args?.wordMinLength || 3; // Number of letters per word
    const WORDMAXLENGTH = args?.wordMaxLength || args?.wordMinLength || 8; // Number of letters per word


    // TODO: Create a more optimized generator
    const gibberish = [];
    for (let i = 0; i < PARAGRAPHS; i++) {
        const paragraph = [];
        for (let j = 0; j < PARAGRAPHLENGTH; j++) {
            const word = [];
            for (let k = 0; k < Math.floor(Math.random() * (WORDMAXLENGTH - WORDMINLENGTH + 1)) + WORDMINLENGTH; k++) {
                word.push(LETTERS[Math.floor(Math.random() * LETTERS.length)]);
            }
            paragraph.push(word.join(''));
        }
        gibberish.push(paragraph.join(SEPATATOR).slice(0, PARAGRAPHLENGTH));
    }
    return PARAGRAPHS === 1 ? gibberish[0] : gibberish;
}