import { useState } from 'react';
import './App.css';
import Counter from './components/counter/Counter';
// import InputForm from './components/InputForm';

function App() {
  const [isDisplay, setIsDisplay] = useState(true);
  const handleDisplay = () => {
    setIsDisplay(!isDisplay);
  };
  return (
    <div className='App'>
      <h2>#2 useEffect</h2>
      <button onClick={() => handleDisplay()}>
        {isDisplay ? 'コンポーネント非表示' : 'コンポーネント表示'}
      </button>
      {isDisplay && <Counter />}
      {/* <InputForm /> */}
    </div>
  );
}

export default App;
