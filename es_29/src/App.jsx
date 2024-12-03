import { TodoProvider } from "./assets/ToDoContext"
import TodoList from "./assets/ToDoList"


const App = () => {
  

  return (
    <>
    <TodoProvider>
      <TodoList/>
    </TodoProvider> 
    </>
  )
}

export default App
