import React from 'react';
import { Title } from '../../component/UI/Subtitel/subtitel.style';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@mui/material';

function Cart(props) {

    const dispatch = useDispatch();

    const medData = useSelector((state) => state.medicines)
    const cartData = useSelector((state) => state.cart)

    console.log(medData, cartData);

    let cartItems = cartData.items.map((v) => {
        let mData = medData.medicines.find((m) => m.id === v.pid)

        let fData = { ...mData, ...v }

        return fData
    })

    console.log(cartItems);

    const handleInc = (id) => {
        console.log(id);
        console.log('handle increment called');
    }

    return (
        <section id="doctors" className="doctors">
            <div className="container">
                <div className="section-title">
                    <h2>Cart</h2>
                    {/* <Title>Duis sagittis rutrum neque, quis tincidunt arcu pretium ac. Suspendisse sem risus, molestie vitae arcu et,
                        tincidunt viverra erat. Quisque in lectus id nulla viverra sodales in a risus. Aliquam ut sem ex. Duis viverra
                        ipsum lacus, ut pharetra arcu sagittis nec. Phasellus a eleifend elit.
                    </Title> */}
                </div>
                {
                    cartItems.map((c) => {
                        return(
                            <div className="card mb-3">
                            <div className="card-body">
                                <div className="d-flex justify-content-between">
                                    <div className="d-flex flex-row align-items-center">
        
                                        <div className="ms-3">
                                            <h5>{c.name}</h5>
                                            <p className="small mb-0">{c.desc.substring(0 ,120)}</p>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-row align-items-center">
                                        <div style={{ width: 50 }}>
                                            {/* <Button onClick={()=>handleDec(c.pid)}></Button> */}
                                            <h5 className="fw-normal mb-0">{c.qty}</h5>
                                            <Button onClick={()=>handleInc(c.pid)}>+</Button>
                                        </div>
                                        <div style={{ width: 80 }}>
                                            <h5 className="mb-0">${c.price}</h5>
                                        </div>
                                        <a href="#!" style={{ color: '#cecece' }}><i className="fas fa-trash-alt" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        )
                    })
                }


              

            </div>
        </section>
    );
}

export default Cart;