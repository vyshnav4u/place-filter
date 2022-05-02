import { useEffect, useState } from 'react';
import './App.css';
import SearchPlace from './components/SearchPlace';

function App() {
  const [userInput, setUserInput] = useState('');

  useEffect(() => {
    if (!userInput) return;
  }, [userInput]);

  return (
    <div className="App">
      <form>
        <input
          id="user-input"
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
      </form>
      <section>{userInput}</section>
    </div>
  );
}

export default App;
