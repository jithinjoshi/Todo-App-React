import React, { useState } from 'react'
import '../App.css'

const Form = ({setTodos, todos, setFilterStatus,inputTodo}) => {
    const [isValid, setIsvalid] = useState(true)
    

    const submitHandler = (e) => {
        e.preventDefault();
        const inputText = inputTodo.current.value;
        if (inputText.trim().length === 0) {
            setIsvalid(false);
            return;
        }
        
        setTodos((prev) => {
            return [
                ...prev,
                { id: Math.random() * 1000, isCompleted: false, text: inputText }
            ]
        })
        setIsvalid(true);
        inputTodo.current.value = '';
    }

    const filterValuesHandler = (e) => {
        setFilterStatus(e.target.value)
    }
    return (
        <div>
            <label htmlFor="">{`${!isValid ? 'Please enter your todo activity' : ''}`}</label>
            <form onSubmit={submitHandler}>

                <input type="text" className={'todo-input'} ref={inputTodo}/>
                <button className="todo-button" type="submit">
                    <i className="fas fa-plus-square"></i>
                </button>
                <div className="select">
                    <select name="todos" className="filter-todo" onChange={filterValuesHandler}>
                        <option value="all">All</option>
                        <option value="completed">Completed</option>
                        <option value="uncompleted">Incompleted</option>
                    </select>
                </div>
            </form>

        </div>

    )
}

export default Form;