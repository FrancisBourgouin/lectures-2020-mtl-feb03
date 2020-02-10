/*

    taxes : 14.975%

    Product 1 : 19.99
    Product 2 : 21.99

    Subtotal : 41.98
    Taxes : 6.29

    Total : 48.27

*/

const cart = {
    toothpaste:2.99,
    sugar:0.99,
    orangeJuice: 4.99
}

const cartArray = [
    {name:"toothpaste", price:2.99},
    {name:"sugar", price: 0.99}
]

// 3.980000000004 => 3.98



const validatePricesOfCart = () => {

}
const calculateSubtotal = (cart) => {
    let subtotal = null
    for (const product of cart) {
        subtotal += product.price
    }

    roundedSubtotal = Math.round(subtotal*100) / 100
    console.log(roundedSubtotal)
    return roundedSubtotal
}

const calculateTaxes = () => {

}

const calculateGrandTotal = () => {

}

module.exports = {calculateSubtotal, calculateTaxes, calculateGrandTotal}