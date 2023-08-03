import React, { useContext } from 'react';
import counterContext from './CounterContext';

function Counter() {
    const { counter, increment, decrement } = useContext(counterContext);
    return (
        <section id="medicine" className="medicine">
            <center>
                <div className="container1">
                    <div className="section-title">
                        <h1 name="h2tag1">Counter Context</h1>
                    </div>
                    <div className="count-wrapper">
                        <button onClick={increment}>+</button>
                        <span>{counter}</span>
                        <button onClick={decrement}>-</button>
                    </div>
                </div>
            </center>
        </section>
    );
}

export default Counter;