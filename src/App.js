import './App.css';
import { createContext } from 'react';
import ComponentC from './components/03-context/ComponentC';
// import IntervalHookCounter from './components/02-useEffect/IntervalHookCounter';
// import IntervalClassCounter from './components/02-useEffect/IntervalClassCounter';

export const UserContext = createContext()
export const ChannelContext = createContext()

function App() {
  return (
    <div className="App">
      {/* <IntervalClassCounter /> */}
      
      <UserContext.Provider value={'Valp'}>
        <ChannelContext.Provider value={'Valp CODM'} >
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
