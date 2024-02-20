import logo from './logo.svg';
import './App.css';
import AddTodo from './components/AddTodo/AddTodo';
import Todos from './components/Todos/Todos';

function App() {
  return (
    <div className='App'>
      <AddTodo/>
      <Todos/>
    </div>
  );
}

export default App;
