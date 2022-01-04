import { useState, useEffect } from 'react';

const useCounter = (initCounter) => {

    const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + initCounter);
    }, 1000);

    return () => clearInterval(interval);
  }, [initCounter]);

  return counter;

};

export default useCounter;