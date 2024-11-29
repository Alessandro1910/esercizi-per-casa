import ItemList from './assets/ItemList'


const App = () => {
  const fruits = ["Mela", "Banana", "Pera", "Arancia"];

  return (
    <>
      <h1>Lista Frutta</h1>
      <ItemList items={fruits} />
    </>
  )
}

export default App
