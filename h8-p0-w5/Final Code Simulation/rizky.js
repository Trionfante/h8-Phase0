var pricelist = [{
  name: 'pencil',
  types: [
    {type: '2b', price: 20},
    {type: '4b', price: 22},    
    {type: 'hb', price: 24 }
  ]
}, {
  name: 'clothes',
  types: [
    {type: 'undies', price: 50},
    {type: 't-shirt', price: 55},
    {type: 'shorts', price: 80}
  ]
}, {
  name: 'utensils',
  types: [
    {type: 'spoon', price: 88},
    {type: 'fork', price: 88}
  ]
}]


var priceListObject = {
  pencil : {
    types: [
      { type: '2b', price: 20 },
      { type: '4b', price: 22 },
      { type: 'hb', price: 24 }
    ]
  },
  clothes : {
    types: [
      { type: 'undies', price: 50 },
      { type: 't-shirt', price: 55 },
      { type: 'shorts', price: 80 }
    ]
  },
  utensils : {
    types: [
      { type: 'spoon', price: 88 },
      { type: 'fork', price: 88 }
    ]
  }
}



var cart = [
  { name: 'pencil', type: '2b'},
  { name: 'pencil', type: '2b' },
  { name: 'pencil', type: '4b' },
  { name: 'pencil', type: 'hb' },
  { name: 'utensils', type: 'fork' },
  { name: 'utensils', type: 'fork' },
  { name: 'utensils', type: 'fork' },
  { name: 'utensils', type: 'spoon' },
  { name: 'clothes', type: 'undies' },
  { name: 'clothes', type: 't-shirt' },
  { name: 'clothes', type: 'shorts' },
]



// 1. given the pricelist above, make function that accepts one parameter (cart) that counts total price of the items inside the cart
// 2. use priceListObject as a reference to count the total price


function checkout (cart) {
}


console.log(checkout(cart)) // 623

// 3. make a function that accepts one parameter that describe the total price categorized by item name

function checkoutSummary (cart) {
}

console.log(checkoutSummary(cart)) // [{type: 'pencil', totalPrice: 86}, {type: 'utensils', totalPrice: 352}, {type: 'clotehs', totalPrice: 185}]
