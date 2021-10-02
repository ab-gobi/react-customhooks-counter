import { useState , useEffect} from 'react';

const useCounter = (forwardFlag) => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
    const interval = setInterval(() => {
        if(forwardFlag){
            setCounter((prevCounter) => prevCounter + 1);
        }
        else{
            setCounter((prevCounter) => prevCounter - 1);
        }
    }, 1000);

    return () => clearInterval(interval);
  }, [forwardFlag]);
  return counter;
}

export default useCounter;
