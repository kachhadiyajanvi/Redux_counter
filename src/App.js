import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { increment,decrement,defaultval } from './app/counter/counterSlice';  
function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch=useDispatch();
  return (
    <div className="App">
      <h1>count:{count}</h1>

      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={()=>dispatch(decrement())}>Decrement</button>
      <button onClick={()=>dispatch(defaultval())}>Default value</button>

    </div>
  );
}

export default App;
