import React, { useMemo } from 'react';
import { useState } from 'react';

function MemoCounter(props) {

    const [memo, setMemo] = useState(0);

    const [number, setNumber] = useState(0)


    const increment = () => {
        setMemo(memo + 1)
    }

    const decrement = () => {
        setMemo(memo - 1)

    }

    const findfectorial = () => {

        let fact = 1;

        for (let i = number; i >= 1; i--) {
            fact = fact * i;
            console.log(fact);
        }

        return fact;

    }

    const result = useMemo(() => {
        // let x = findfectorial();
        return findfectorial();
    }, [number]);

    return (
        <>
            <div>
                <button onClick={() => increment()}>+</button>
                <span>{memo}</span>
                <button onClick={() => decrement()}>-</button>

            </div>
            <div>
                <input
                    type='text'
                    onChange={(e) => setNumber(parseInt(e.target.value))} />
                <span>
                    Factortial value :{result}
                </span>
            </div>
        </>
    );
}

export default MemoCounter;