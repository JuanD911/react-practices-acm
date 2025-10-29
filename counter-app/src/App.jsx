import { useState, useEffect } from 'react'
import './App.css'
import Button from './components/Button'
import { useCounter } from './hooks/useCounter';

function App() {

  const { count, increment, decrement, reset } = useCounter(0);

  useEffect(() => {
    document.title = `Contador: ${count}`;
  }, [count])

  return (
    <div className='counter'>
      <div className='btns'>
        <Button onClick={increment}>Incrementar</Button>
        <Button onClick={decrement}>Decrementar</Button>
        <Button onClick={reset}>Reiniciar</Button>
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