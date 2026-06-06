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

// Everytime a parent is rerendered it will be through useState() ke andar ka argument, this change will also propogate through its child
//The setTodos function when triggered makes the useState() check any changes in the todos variable and reRender
//The child will just re render if its a variable not going through useState - here the variable is todos, but if the child uses variable going through useState() - todos the changes in that variable will reflect in child as well

  function ChildButton(){
    return (
      <>
      {
      console.log("The Child Button was returned on a DOM update on parent! when you clicked Add Todo")
      //the child button is not rerendered as there is no props it takes as input which are changed 
      }
      <button>ChildButton Returned</button>
      </>
    )
  }

//props = whatever you send as argument, here i received a title, so i am destructuring it with props.title
  function ChildButtonWithProps(props){
    return(
      <button style={{backgroundColor: "white", color:"blue"}}>{props.title}</button>
    )
  }



  return (
    <>
    <button onClick={addNewTodo}>Add todo</button>
      {
        todos.map(function(todo){
        return <Todo title={todo.title} description={todo.description}></Todo>
        })
      }
      <ChildButton></ChildButton>

      {/* I sent title directly of the last thing in todos, as todos change the button changes too */}

      <ChildButtonWithProps title={todos[todos.length-1].title}></ChildButtonWithProps>
    </>
  )
}

export default Button;