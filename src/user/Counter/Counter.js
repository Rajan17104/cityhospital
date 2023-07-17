import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../Redux/action/counter.action';

function Counter(props) {

    const dispatch = useDispatch();

    const counterVal = useSelector(state => state.counter);

    const handleInc = () => {
        dispatch(increment());
    }

    const handleDec = () => {
        dispatch(decrement());
    }


    return (
        <>
            <h1>Counter Redux</h1>
            <div>
                <button onClick={() => handleInc()}>+</button>
                <span>{counterVal.count}</span>
                <button onClick={() => handleDec()}>-</button>
            </div>
        </>
    );
}

export default Counter;