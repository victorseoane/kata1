const functions = require('../lib/functions.js')

describe('plus function ',()=>{
    it("works with simple case",()=>{
        const result = functions.one(functions.plus(functions.two()))
        expect(result).toEqual(3)
    })
})
describe('minus function ',()=>{
    it("works with simple case",()=>{
        const result = functions.one(functions.minus(functions.two()))
        expect(result).toEqual(-1)
    })
})

describe('times function ',()=>{
    it("works with simple case",()=>{
        const result = functions.three(functions.times(functions.five()))
        expect(result).toEqual(15)
    })
})
describe('dividedBy function ',()=>{
    it("works with simple case",()=>{
        const result = functions.nine(functions.dividedBy(functions.four()))
        expect(result).toEqual(2)
    })
})