import { useState, createContext } from 'react';

const CounterContext = createContext();

export const CounterProvider = ({ children }) => {

    const [counter, setCounter] = useState(0);

    const increment = () => {
        return setCounter(counter + 1);

    }

    const decrement = () => {
        return setCounter(counter - 1);

    }

    return (
        <CounterContext.Provider value={{ counter, increment, decrement }}>
            {children}
        </CounterContext.Provider>
    )
}

export default CounterContext;