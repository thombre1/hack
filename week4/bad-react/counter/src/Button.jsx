import './App.css'
import { useState } from 'react';

const tasks = [
  {
    title: "Go to GYm",
    description: "Gym Jao 5 Baje",
    completed: "False"
  },
  {
    title: "Stuyd GAte",
    description: "Padhai Karo 4 baje",
    completed: "False"
  },
  {
    title: "Eat Eggs",
    description: "3 Ande Shaam ko",
    completed: "True"
  }
]

function Todo(props){
    return(
    <li>{props.title}{props.description}</li>
    )
}


function Button(){
  const [todos,setTodos] = useState(tasks);
  function addNewTodo(){
    setTodos([...todos,{
      title: "New Todo",
      description: "Something New in Description"
    }])
    console.log(todos)
  }




  return (
    <>
    <button onClick={addNewTodo}>Add todo</button>
      {
        
        todos.map(function(todo){
        return <Todo title={todo.title} description={todo.description}></Todo>
        })
      }

    </>
  )
}

export default Button;