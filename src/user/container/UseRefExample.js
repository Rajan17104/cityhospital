import React, { useRef, useState } from 'react';

function UseRefExample(props) {

    const [name, setName] = useState('')

    const ref = useRef(0)

    return (
        <div>
            <input
                type='text'
                onChange={(e) => setName(e.target.value)}
            />
        </div>
    );
}

export default UseRefExample;