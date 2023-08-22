import { useCallback, useState } from "react";
import Listcallback from "./Listcallback";

function Callback(props) {

    const [theme, setTheme] = useState(false)
    const [number, setnumber] = useState(1)

    const handleTheme = {
        background: theme ? '#000' : '#fff',
        color: theme ? '#fff' : '#000'
    }

    const getItem = useCallback((n) => {
        return[number, number+n , number+n+1]
    }, [number])

    return (
        <>
            <div style={handleTheme}>
                <h1>Callback</h1>
                {/* <button onClick={() => theme.themeToggle(theme.theme)}>theme</button> */}

                <button onClick={() => setTheme(!theme)}>theme</button>
            </div>

            <hr></hr>

            <div>
                <input type="text" onChange={(e) => setnumber(parseInt(e.target.value))} />
                <Listcallback item={getItem} />
            </div>
        </>
    );


}

export default Callback;