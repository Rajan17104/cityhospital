import React from 'react';
import { Title } from '../../component/UI/Subtitel/subtitel.style';
import { useDispatch, useSelector } from 'react-redux';
import { DecCartQty, IncCartQty, RemoveCartQty } from '../../Redux/action/cart.action';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { addCart, decQty, incQty, removeItem } from '../../Redux/slice/CartSlice';
import { Button } from 'reactstrap';

function Cart(props) {

    const dispatch = useDispatch();

    const medData = useSelector((state) => state.medicines);
    const cartData = useSelector((state) => state.cart);

    console.log(medData, cartData);

    let cartItems = cartData.items.map((v) => {
        let mData = medData.medicines.find((m) => m.id === v.pid);
        console.log(mData);

        let fdata = { ...mData, ...v }
        console.log(fdata);

        return fdata
    })

    let Total = cartItems.reduce((acc, v) => acc + v.price * v.qty, 0)


    console.log(cartItems);

    const handleInc = (id) => {
        dispatch(incQty(id))
        console.log(id);
        console.log('handle increment called');
    }

    const handleDec = (id) => {
        dispatch(decQty(id))
        console.log(id);
        console.log('handle Decrement called');

    }

    const handleDelete = (id) => {
        dispatch(removeItem(id))
        console.log('handle Remove called');

    }


    return (
        <section id="cart" className="cart">
            <div className="container">
                <div className="section-title">
                    <h2>Cart</h2>
                    {/* <Title>Duis sagittis rutrum neque, quis tincidunt arcu pretium ac. Suspendisse sem risus, molestie vitae arcu et,
                        tincidunt viverra erat. Quisque in lectus id nulla viverra sodales in a risus. Aliquam ut sem ex. Duis viverra
                        ipsum lacus, ut pharetra arcu sagittis nec. Phasellus a eleifend elit.
                    </Title> */}
                </div>
                <div style={{display: "flex" , justifyContent: "flex-end"}}>
                    <button style={{ backgroundColor: "#FF6337", padding: "10px", marginBottom: "20px", borderRadius: "20px" }}><a style={{ color: "#fff" }} href='/Medicine'>Continue shoping </a></button>
                </div>
                {
                    cartItems.map((c) => {
                        return (
                            <div className="card mb-3">
                                <div className="card-body">
                                    <div className="d-flex justify-content-between">
                                        <div className="d-flex flex-row align-items-center">

                                            <div className="ms-3">
                                                <h5>{c.name}</h5>
                                                <p className="small mb-0">{c.desc.substring(120)}{'....'}</p>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-row align-items-center">
                                            <div style={{ width: 150, display: 'flex' }}>

                                                <button style={{ backgroundColor: '#FF6337', color: 'white', borderRadius: '50%', margin: '0 10px' }} onClick={() => handleDec(c.pid)}><RemoveIcon /></button>
                                                {/* <Button style={{ width: '50px', height: '20px', display: 'flex', alignItems: 'center' }} onClick={() => handleDec(c.pid)}><RemoveIcon style={{ display: 'flex', alignItems: 'center' }} /></Button> */}

                                                <h5 className="fw-normal mb-0">{c.qty}</h5>
                                                <button style={{ backgroundColor: '#FF6337', color: 'white', borderRadius: '50%', margin: '0 10px' }} onClick={() => handleInc(c.pid)}><AddIcon /></button>
                                            </div>
                                            <div style={{ width: 80 }}>

                                                <h5 className="mb-0"><CurrencyRupeeIcon style={{ fontSize: '20px' }} />{c.qty * c.price}</h5>
                                            </div>
                                            {/* <a href="#!" style={{ color: '#cecece' }}><i className="fas fa-trash-alt" /></a> */}
                                            <IconButton style={{ color: 'red' }} aria-label="delete" onClick={() => handleDelete(c.pid)}>
                                                <DeleteIcon />
                                            </IconButton>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }

                {/* <div className='' style={{}}>
                    <p>{Total}</p>
                </div> */}

                {/* <div className=" align-items-center" style={{display:'flex' , alignItems:'flex-end'}}>
                    Total Amount Is:-
                    <div style={{ width: 80 }}>
                        <h5 className="mb-0">{Total}</h5>
                    </div>
                </div> */}

                {
                    cartData.items.length > 0 ?
                        <h5 className='text-end '><b>Totle Amount: </b><span className='d-inline-block text-start ps-1' style={{ minWidth: '163px' }}><CurrencyRupeeIcon sx={{ fontSize: '20px' }} />{Total}</span></h5>
                        : null
                }

            </div>
        </section>
    );
}

export default Cart;




// import React from 'react';
// // import TitleBox from '../UI/titlePart/TitleBox';
// import { useDispatch, useSelector } from 'react-redux';
// import AddIcon from '@mui/icons-material/Add';
// // import { Button } from '@mui/material';
// import RemoveIcon from '@mui/icons-material/Remove';
// import CloseIcon from '@mui/icons-material/Close';
// import { DecCartQty, IncCartQty, RemoveCartQty } from '../../Redux/action/cart.action';
// import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
// import { Title } from '../../component/UI/Subtitel/subtitel.style';
// import Button from '../../component/UI/Button/Button';
// // import { Title } from '@mui/icons-material';

// function Cart() {

//     const dispatch = useDispatch();
//     const medicineState = useSelector((state) => state.medicines);
//     const cartState = useSelector((state) => state.cart);

//     let mediToCartData = cartState.items.map((v) => {
//         let filterData = medicineState.medicines.find((m) => m.id === v.pid);

//         return { ...filterData, ...v }
//     })

//     let totleAmount = mediToCartData.reduce((acc, v) => acc + parseInt(v.price) * v.qty, 0);

//     const handleIncrement = (id) => {
//         dispatch(IncCartQty(id))
//     }

//     const handleDecrement = (id) => {
//         dispatch(DecCartQty(id))
//     }

//     const handleRemove = (id) => {
//         dispatch(RemoveCartQty(id));
//     }
//     return (
//         <section id="cart" className="cart">
//             <div className="container">
//                 <Title
//                     titleText='Cart'
//                     subTitleText={[
//                         'Welcome to cart. You can see here your added product. Thank you !!!'
//                     ]}
//                 />
//                 <div className="row justify-content-center">
//                     {
//                         mediToCartData.map((c) => {
//                             return (
//                                 <div key={c.pid} className="card mb-3 shadow-sm">
//                                     <div className="card-body">
//                                         <div className="d-flex g-5 justify-content-between">
//                                             <div className='w-50'>
//                                                 <h5 style={{
//                                                     fontWeight: '700',
//                                                     fontSize: '20px',
//                                                     color: '#2c4964'
//                                                 }}>{c.mediname}</h5>
//                                                 <p className="small mb-0">{c.medidesc}</p>
//                                             </div>
//                                             <div className="d-flex gap-3 flex-row align-items-center">
//                                                 <div className='d-flex align-items-center justify-content-center'>
//                                                     <Button classes='p-2 rounded-0' onClick={() => handleIncrement(c.pid)}><AddIcon sx={{ fontSize: '20px' }} /></Button>
//                                                     <h5 style={{ borderTop: '1px solid #FF6337', borderBottom: '1px solid #FF6337', lineHeight: '1.05', minWidth: '50px' }}
//                                                         className="fw-normal text-center mb-0  p-2">{c.qty}</h5>
//                                                     <Button classes='p-2 rounded-0' onClick={() => handleDecrement(c.pid)}><RemoveIcon sx={{ fontSize: '20px' }} /></Button>
//                                                 </div>
//                                                 <div style={{ minWidth: 85 }}>
//                                                     <h5 className="mb-0 text-center"><CurrencyRupeeIcon sx={{ fontSize: '20px' }} />{c.qty * c.price}</h5>
//                                                 </div>
//                                                 <Button onClick={() => handleRemove(c.pid)} classes='p-0 bg-transparent'><CloseIcon sx={{ color: '#cecece' }} /></Button>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             )
//                         })
//                     }
//                 </div>
//                 {
//                     cartState.items.length > 0 ?
//                         <h5 className='text-end my-4'><b>Totle Amount: </b><span className='d-inline-block text-start ps-4' style={{ minWidth: '163px' }}><CurrencyRupeeIcon sx={{ fontSize: '20px' }} />{totleAmount}</span></h5>
//                         : null
//                 }
//             </div>
//         </section>
//     );
// }

// export default Cart;