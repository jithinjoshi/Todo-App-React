
import { useState,useEffect,useRef} from 'react';
import './App.css';
import Form from './Components/Form';
import TodoList from './Components/TodoList';

function App() {
  const inputTodo = useRef();

  const [todos, setTodos] = useState([]);
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterData, setFilterData] = useState([]);
  

  //filtering data
  const filterHandler = () => {
    switch (filterStatus) {
      case 'completed':
        setFilterData(todos.filter((todo) => {
          return (
            todo.isCompleted === true
          )
        }))
        break;

      case 'uncompleted':
        setFilterData(todos.filter((todo) => {
          return (
            todo.isCompleted === false
          )
        }))
        break;

      default:
      case 'all':
        setFilterData(todos);
        break;
    }
  }

  useEffect(() => {
    filterHandler();
  }, [todos,filterStatus])
  



  return (
    <div className="App">
      <header>
        Todo App
      </header>
      <Form  setTodos={setTodos} todos={todos} setFilterStatus={setFilterStatus} inputTodo={inputTodo}/>
      <TodoList todos={todos} setTodos={setTodos}  filterData={filterData}/>
    </div>
  );
}

export default App;
