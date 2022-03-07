# gibberish-generator

Gibberish generator that create random strings with random widths.

It will create a paragraph with random letters for each word.

The length of the paragraph is determined by the user, including the separators.

## Installation

```bash
npm install gibberish-generator
```

## Usage

```javascript
const gibberishGen = require('gibberish-generator');

// Default
const text = gibberishGen();
console.log(text);
// => 'pajh pcxejs spfeo htfxjhx wjpis cnyazh facmv cie xkneotx glienviw wux vputk fioix urtl ywiul iupdl d'

// Custom
const textCustom = gibberishGen({
    paragraphs : 2,
    letters : 'abcdefghijklmnopqrstuvwxyz',
    separator : ' ',
    paragraphLength : 50,
    wordMinLength : 4,
    wordMaxLength : 10,
});
console.log(textCustom);
// => [
//      'ghagvut uxexn xqxh duivaatsv agcdgm uatyj dokg itq',
//      'iirr rsvyyh bokbr gfeocs mnmmdz tzyzdlrv ikcom wjg'
//    ]    


```

## Options

| Name | Type | Description | Default |
| :--- | :--: | :---------- | :-----: |
| paragraphs | number | Number of paragraphs | 1 |
| letters | string | Letters to use | abcdefghijklmnopqrstuvwxyz |
| separator | string | Separator between words | ' ' |
| paragraphLength | number | Length of the paragraph | 100 |
| wordMinLength | number | Minimum length of a word | 4 |
| wordMaxLength | number | Maximum length of a word.<br>If `wordMinLength` is declared, `wordMaxLength` value will be `wordMinLength` | 10 |
