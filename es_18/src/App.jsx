import ItemList from './assets/ItemList';

const App = () => {
 
  const Items = ["Pane", "Burro", "Pasta", "Lievito"];

  return (
    <>
     <div>
      <h1>Lista dells spesa</h1>
      <ItemList items={Items}/>
     </div> 
    </>
  )
}

export default App
