import { useEffect, useState, useContext } from 'react'
import { useCounter } from './hooks/useCounter'
import Button from './components/button'
import { ThemeContext } from './components/theme/ThemeContext'
import './App.css'

function App() {
  
  const {count, resume, stop, reset} = useCounter(0);

  useEffect(() => {
    document.title = `Counter: ${count}`
  }, [count])

  const {theme, alterTheme} = useContext(ThemeContext);

  const appClassName = theme === 'dark' ? 'counter-card dark-mode' : 'counter-card light-mode';

  return (
    <div className={appClassName}>
      <div className='buttons'>
        <Button onClick={resume}>Resume</Button>
        <Button onClick={stop}>Stop</Button>
        <Button onClick={reset}>Reset</Button>
        <Button onClick={alterTheme}>Change Theme to {theme === 'light' ? 'Dark 🌙' : 'Light ☀️'}</Button>
      </div>
      <div className='counter-label'>
        <h2>Counter: {count}</h2>
        <h2>Current Theme: {theme}</h2>
      </div>
    </div>  
  );
}

export default App
