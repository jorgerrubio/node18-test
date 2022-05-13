import test from 'node:test'
import assert from 'node:assert'
/* test('example test', () => {
    assert.equal(1, 1, 'should be equal')
}) */

/* test('example object and array test', () => {
    assert.deepEqual({ a: 1 }, { a: 1 }, 'should be equal')
    assert.deepEqual([1, 2, 3], [1, 2, 3], 'should be equal')
}) */

/* test('async test example', async () => {
    const number = await new Promise(resolve => setTimeout(resolve(3), 1000))
    assert.equal(number, 3, 'should be equal')
}) */

/* test('try Array.findLast', () => {
    const arr = [2, 4, 6, 8]
    const lastEven = arr.findLast(item => item % 2 === 0)
    assert.equal(lastEven, 8, 'should be equal')
}) */

/* test('try Array.findLastIndex', () => {
    const arr = [2, 4, 6, 8]
    const lastEvenIndex = arr.findLastIndex(item => item % 2 === 0)
    assert.equal(lastEvenIndex, 3, 'should be equal')
}) */

/* test('fetch', async () => {
    // const response = await fetch('https://www.google.com')
    // assert.equal(response.status, 200, 'should be equal')

    const response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    const json = await response.json()
    assert.equal(json.name, 'ditto', 'should be equal')
}) */

test('test rejects', async () => {
    const tryFetch = async () => {
        try {
            const response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto')
            const json = await response.json()
            return json;
        } catch (e) {
            throw new Error('FetchError');
        }
    }
    assert.rejects(
        tryFetch,
        'FetchError'
    )
})