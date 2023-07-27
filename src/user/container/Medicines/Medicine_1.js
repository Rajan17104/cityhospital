import React, { useEffect, useState } from 'react';
import Customcard from '../../component/UI/Customcard';
import Cart_1 from '../Cart/Cart_1';

function Medicine_1(props) {

    let arr = []
    const [getData, setGetData] = useState([]);
    // const [count, setCount] = useState([]);

    useEffect(() => {
        try {
            fetch('http://localhost:3004/medicines')
                .then((response) => response.json())
                .then((data) => setGetData(data))
                .catch((error) => console.log(error))
        } catch (error) {
            console.log(error);
        }
    }, [])

    const onclick1 = (id) => {


        arr.push({ pid: id, qty: 1 });

        localStorage.setItem('cart', JSON.stringify(arr))

        // let localdata = JSON.parse(localStorage.getItem("cart"));

        // if (localdata === null) {
        //     localStorage.setItem("cart", JSON.stringify([getData]))
        // } else {
        //     localdata.push(getData)
        //     localStorage.setItem("cart", JSON.stringify(localdata))
        // }

        console.log(id);
    }

    return (
        <div >
            <h1 className='mt-5'>Medicine_with_Out_Redux</h1>

            <div className='row'>
                {
                    getData.map((v) => {
                        return (
                            <div className='col-md-4 justify-content-between g-4' >
                                <Customcard

                                    values={v}
                                    btnVal={"Add to cart"}
                                    onclick1={onclick1}
                                />
                            </div>

                        )
                    })
                }
            </div>



        </div>
    );
}

export default Medicine_1;