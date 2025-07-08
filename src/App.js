import { produce } from 'immer';
import { useReducer } from 'react';
import './App.css';

const INCREMENT_COUNT = 'increment-count';
const DECREMENT_COUNT = 'decrement-count';
const CHANGE_VALUE_TO_ADD = 'change-value-to-add';
const SUBMIT_VALUE_TO_ADD = 'submit-value-to-add';

const reducer = (state,action) => {
  switch(action.type){
    case INCREMENT_COUNT:
      state.count = state.count + 1;
      return;
    case DECREMENT_COUNT:
      state.count = state.count - 1;
      return;
    case CHANGE_VALUE_TO_ADD:
      state.valueToAdd = action.payload;
      return;
    case SUBMIT_VALUE_TO_ADD:
      state.count = state.count + state.valueToAdd;
      state.valueToAdd = 0;
      return;
    default:
      return;
  }
  
}

function App() {
  // const [count,setCount] = useState(0);
  // const [valueToAdd,setValueToAdd] = useState(0);

  const [state,dispatch] = useReducer(produce(reducer),{
    count: 0,
    valueToAdd: 0
  });

  console.log(state);

  const handleIncrement = () => {
    dispatch({
      type: INCREMENT_COUNT
    });
  }

  const handleDecrement = () => {
    dispatch({
      type: DECREMENT_COUNT
    });
  }

  const handleChangeValue = (event) => {
    const value = parseInt(event.target.value) || 0;
    
    dispatch({
      type: CHANGE_VALUE_TO_ADD,
      payload: value
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch({
      type: SUBMIT_VALUE_TO_ADD,
    });
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
