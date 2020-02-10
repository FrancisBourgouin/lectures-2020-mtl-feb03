// const sellingStuff = require("../selling_stuff")
const {calculateSubtotal, calculateTaxes, calculateGrandTotal} = require('../selling_stuff')
const chai = require('chai')

chai.should()

/**
 * Purchasing 0 in amount should return 0 for subtotal, taxes and grand total
 * Purchasing one element should make the subtotal the same amount
 * If amount is under 0, should return 0
 * 
 * Tax amount should always be under the subtotal
 * 
 * grand total should be the sum of tax amount and subtotal
 * 
 * 
 * Data structure is like this :
 * 
 * [
    {name:"toothpaste", price:2.99},
    {name:"sugar", price: 0.99}
]
 */


 let subtotal = calculateSubtotal([
    {name:"toothpaste", price:2.99},
    {name:"sugar", price: 0.99}
])

let subtotal2 = calculateSubtotal([
    {name:"toothpaste", price:8.99},
    {name:"sugar", price: 0.99}
])

console.assert(subtotal === 3.98)
console.assert(subtotal2 === 9.98)

describe('Calculate the subtotal properly', () => {
    it('should be 0 if theres nothing in the array', () => {
        let subtotal = calculateSubtotal([])

        subtotal.should.equal(0)
    })
    it('should be 3.98 if my prices are 0.99 and 2.99', () => {
        let subtotal = calculateSubtotal([
            {name:"toothpaste", price:2.99},
            {name:"sugar", price: 0.99}
        ])

        subtotal.should.equal(3.98)
    })
})

