import { useEffect, useState } from 'react'
import { useCounter } from './hooks/useCounter'
import Button from './components/button'
import './App.css'

function App() {
  
  const {count, resume, stop, reset} = useCounter(0);

  useEffect(() => {
    document.title = `Counter: ${count}`
  }, [count])

  return (
    <div className='counter-card'>
      <div className='buttons'>
        <Button onClick={resume}>Resume</Button>
        <Button onClick={stop}>Stop</Button>
        <Button onClick={reset}>Reset</Button>
      </div>
      <div className='counter-label'>
        <h2>Counter: {count}</h2>
      </div>
    </div>
  );
}

export default App
