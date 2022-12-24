import React from 'react'
import Todo from './Todo'


const TodoList = ({todos,setTodos,filterData}) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
      {
        filterData.map((todo)=>{
            return (
                <Todo key={todo.id} text={todo.text} setTodos={setTodos} todos={todos} id={todo.id} todo={todo}/>
            )
        })
      }
      
      </ul>
    </div>
  )
}

export default TodoList