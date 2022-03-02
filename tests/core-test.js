const assert = require('assert')
const gibberish = require('..')

test('Default: Should return a string', () => {
    assert.equal(typeof gibberish(), 'string')
})

test('Default: Should return a string of length 100', () => {
    assert.equal(gibberish().length, 100)
})
test('Default: Should return a string with the default separator', () => {
    assert.equal(gibberish().includes(' '), true)
})

test('Default: Should return a string with the default letters', () => {
    assert.equal(String(gibberish()).match(/[a-z]/g).length > 0, true)
})

test('Default: Words in paragraph should have a length between 3 and 8', () => {
    assert.equal(String(gibberish()).match(/[a-z]{3,8}/g).length > 0, true)
})


test('Custom: Should return a Array if the paragraphs option is great than 1', () => {
    assert.equal(gibberish({
        paragraphs: 2,
    }).length, 2)
})


test('Custom: Should return a string with the custom separator', () => {
    assert.equal(gibberish({
        separator: ','
    }).includes(','), true)
})