import './App.css'
import { createContext, useReducer } from 'react'
import ComponentA from './components/04-useReducer/ComponentA';
import ComponentD from './components/04-useReducer/ComponentD';
import ComponentF from './components/04-useReducer/ComponentF';

export const CountContext = createContext()

const initialState = 0

const reducer = (state, action) => {
  switch (action) {
    case 'increment':
      return state + 1
    case 'decrement':
      return state - 1
    case 'reset':
      return initialState
    default:
      return state
  }
}

function App() {

  const [count, dispatch] = useReducer(reducer, initialState)
  const contextValue = {
    countState: count, 
    countDispatch: dispatch 
  }
    
  return (
    <CountContext.Provider value={contextValue}>
      <div className="App">
        Count - {count}
        <ComponentA />
        <ComponentD />
        <ComponentF />
      </div>
    </CountContext.Provider>
  );
}

export default App;
