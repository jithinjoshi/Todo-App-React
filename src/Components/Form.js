import React, { useState } from 'react'
import '../App.css'

const Form = ({ inputData, setTodos, input, todos, setFilterStatus }) => {
    const [isValid, setIsvalid] = useState(true)
    const inputHandler = (e) => {
        inputData(e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        if (input.trim().length === 0) {
            setIsvalid(false);
            return;
        }
        setTodos((prev) => {
            return [
                ...prev,
                { id: Math.random() * 1000, isCompleted: false, text: input }
            ]
        })
        setIsvalid(true);
        inputData("");
    }

    const filterValuesHandler = (e) => {
        setFilterStatus(e.target.value)
    }
    return (
        <div>
            <label htmlFor="">{`${!isValid ? 'Please enter your todo activity' : ''}`}</label>
            <form onSubmit={submitHandler}>

                <input type="text" className={'todo-input'} onChange={inputHandler} value={input} />
                <button className="todo-button" type="submit">
                    <i className="fas fa-plus-square"></i>
                </button>
                <div className="select">
                    <select name="todos" className="filter-todo" onChange={filterValuesHandler}>
                        <option value="all">All</option>
                        <option value="completed">Completed</option>
                        <option value="uncompleted">Uncompleted</option>
                    </select>
                </div>
            </form>

        </div>

    )
}

export default Form;