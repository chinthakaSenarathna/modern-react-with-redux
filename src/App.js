import { useReducer } from 'react';
import './App.css';

const reducer = () => {
  
}

function App() {
  // const [count,setCount] = useState(0);
  // const [valueToAdd,setValueToAdd] = useState(0);

  const [state,dispatch] = useReducer(reducer,{
    count: 0,
    valueToAdd: 0
  });

  const handleIncrement = () => {
    // setCount(count => count + 1);
  }

  const handleDecrement = () => {
    // setCount(count => count - 1);
  }

  const handleChangeValue = (event) => {
    // const value = parseInt(event.target.value) || 0;
    // console.log(value);
    // console.log(typeof(value));
    // setValueToAdd(value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    // setCount(count + valueToAdd);
    // setValueToAdd(0);
  }

  return (
    <div className="App">
      <h1>Count is {state.count}</h1>
      <div>
        <button type='button' onClick={handleIncrement}>Increment</button>
        <button type='button' onClick={handleDecrement}>Decrement</button>
      </div>
      <form onSubmit={handleSubmit}>
        <label htmlFor='value-to-add'>Add a lot!</label>
        <input 
          id='value-to-add'
          type='number'
          value={state.valueToAdd || ''}
          onChange={handleChangeValue}
        />
        <button type='submit'>Add it!</button>
      </form>
    </div>
  );
}

export default App;
