import { useState } from 'react'
import './App.css'
import Button from './components/Button'

function App() {

  const [count, setCount] = useState(0);

  const increase = () => setCount(count + 1);
  const decrease = () => setCount(count - 1);

  return (
    <div className='counter'>
      <div className='btns'>
        <Button onClick={increase}>Incrementar</Button>
        <Button onClick={decrease}>Decrementar</Button>
      </div>
      <div>
        <h2 className='counter-label'>
          Contador: {count}
        </h2>
      </div>
    </div>
  );
}

export default App