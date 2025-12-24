import './App.css'

const products = [
  { title: 'Cabbage', id: 1 },
  { title: 'Garlic', id: 2 },
  { title: 'Apple', id: 3 },
];

const listItems = products.map(iterator=>
  <li>
    {iterator.title}
  </li>
)
function shadyAlert(){
  alert('YOu clicked me!')
}

function App(){
  return (
    <>
      <ul>
        {listItems}
      </ul>
      <button onClick={shadyAlert}>Try Alerting</button>
    </>
  )
}
export default App

