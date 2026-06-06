const expenses = [
    {
    id: 1,
    timestamp: 1656076800000,
    price: 10,
    category: 'Food',
    itemName: 'Pizza',
    },
    {
    id: 3,
    timestamp: 1656076800000,
    price: 210,
    category: 'Food',
    itemName: 'Pizza',
    },
    {
    id: 2,
    timestamp: 1656076800000,
    price: 100,
    category: 'Food',
    itemName: 'Pizza',
    }
]


const newExpenses = expenses.map((item)=>{
  return{
    category: item.category,
    totalPrice: item.price
  }
})

console.log(newExpenses);
