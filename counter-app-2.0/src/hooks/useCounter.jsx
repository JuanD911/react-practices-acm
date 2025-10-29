import { useEffect, useState, useRef } from "react";

export function useCounter(initial = 0) {
  const [count, setCount] = useState(initial);
  const [running, setRunning] = useState(true);
  const intervalRef = useRef(true);

  useEffect(() => {
    if (running) {
      intervalRef.current = setInterval(() => {
        setCount(prev => prev + 1);
      }, 1000);
    }

    return () => clearInterval(intervalRef.current);
  }, [running]);

  const resume = () => setRunning(true);
  const stop = () => setRunning(false);
  const reset = () => setCount(initial);

  return { count, resume, stop, reset };
}
