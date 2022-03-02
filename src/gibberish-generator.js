module.exports = function (args) {
    const PARAGRAPHS = args?.paragraphs || 1; // Number of paragraphs to generate
    const LETTERS = args?.letters || 'abcdefghijklmnopqrstuvwxyz'; // String of letters to generate
    const SEPATATORS = args?.separators || '.,!?'; // String of separators to generate
    const PARAGRAPHLENGTH = args?.paragraphLength || 100; // Number of letters per paragraph
    const WORDMINLENGTH = args?.wordMinLength || 3; // Number of letters per word
    const WORDMAXLENGTH = args?.wordMaxLength || 8; // Number of letters per word


    return {
        paragraphs: PARAGRAPHS,
        letters : LETTERS,
        sepatators : SEPATATORS,
        paragraphLength : PARAGRAPHLENGTH,
        wordMinLength : WORDMINLENGTH,
        wordMaxLength : WORDMAXLENGTH,
    };
    
}