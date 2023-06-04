const {MarkovMachine} = require('./markov')


describe('constructor', function() {

    let mm;

    beforeEach(function() {
        mm = new MarkovMachine("the cat in the hat");
    })

    test('should create chains', function() {
        expect(mm.chains.has('the')).toEqual(true)
        expect(mm.chains.has('cat')).toEqual(true)
        expect(mm.chains.has('in')).toEqual(true)
        expect(mm.chains.has('hat')).toEqual(true)

        expect(mm.chains.get('the')).toEqual(['cat', 'hat'])
        expect(mm.chains.get('hat')).toEqual([null])
    })

    test('should create text', function() {

        expect(typeof mm.makeText()).toBe("string")

    })
})