import {useState} from 'react'

const TodoForm = () => {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])

  const handleClick = (e) => {
    e.preventDefault()
    if(todo == ""){
      console.log("You must enter a todo");
    } else {
      console.log(todo);
      setTodos([{id: new Date().getTime(), name:todo, state:'undone'}, ...todos])
      console.log(todos);
      setTodo("")
    }
  }
  const handleChange = (e) => {
    setTodo(e.target.value)
  }
  return (
    <>
      <form action="" className="flex items-center justify-center gap-3 mb-8">            
          <input onChange={handleChange} value={todo} type="text" placeholder="Add a Todo" className="p-2 w-3/4"/>
          <button onClick={handleClick} className="bg-slate-200 px-4 py-2 rounded-lg">Add Todo</button>
      </form>
      <h1>Liste de Todos </h1>
      <div className="todolist p-4">
        <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.name}</li>
          ))}
          </ul>
      </div>
    </>
  )
}

export default TodoForm