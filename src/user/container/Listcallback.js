import React, { useEffect, useState } from 'react';

function Listcallback({item}) {

    const [data, setData] = useState([]);

    useEffect(() => {
        setData(item(5))
    }, [item])

    return (
        <div>
            <ul>
                {
                    data.map((d, i) => {
                        return (
                            <li key={i}>{d}</li>
                        )
                    })
                }
            </ul>
        </div>
    );
}

export default Listcallback;