import React from 'react'
import '../App.css'

const Todo = ({text,id,setTodos,todos,todo}) => {
    const deleteHandler = ()=>{
        setTodos(todos.filter(todo => todo.id !== id));     
    }

    const completeHandler = ()=>{
        
        setTodos(
            todos.map((todo)=>{
            if(todo.id === id){
                return{
                    ...todo,
                    isCompleted:!todo.isCompleted
                }
            }

            return todo
        })
        
        )
    }
  return (
    <div className='todo'>
        <li className={`todo-item ${todo.isCompleted ? "completed" : ""}`}>{text}</li>
        <button className='complete-btn' onClick={completeHandler}>
        <i className="fas fa-check"></i>
        </button>
        <button className='trash-btn' onClick={deleteHandler}>
        <i className="fas fa-trash"></i>
        </button>
    </div>
  )
}

export default Todo