import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFavourite, removeFavourite } from '../../Redux/slice/FavouriteSlice';

function Favorite(props) {

    const dispatch = useDispatch();

    const medData = useSelector((state) => state.medicines);
    const cartData = useSelector((state) => state.cart);
    const favData = useSelector((state) => state.favourite);
    
    console.log(medData)
    console.log(favData);



    let favouriteData = favData.favourite.map((v) => {
        let Fdata = medData.medicines.find((m) => m.id === v.fid)

        return { ...Fdata, ...v }
    })

    // const handleAddfavourite = (id) => {
    //     dispatch(addFavourite(id))
    // }

    // const handleRemovefavourite = (id) => {
    //     dispatch(removeFavourite(id))
    // }

    return (


        <section id="doctors" className="doctors">
            <div className="container">
                <div className="section-title">
                    <h2>My Favorite</h2>
                    {/* <Title>Duis sagittis rutrum neque, quis tincidunt arcu pretium ac. Suspendisse sem risus, molestie vitae arcu et,
                            tincidunt viverra erat. Quisque in lectus id nulla viverra sodales in a risus. Aliquam ut sem ex. Duis viverra
                            ipsum lacus, ut pharetra arcu sagittis nec. Phasellus a eleifend elit.
                        </Title> */}
                </div>
                {
                    favouriteData.map((c) => {
                        return (
                            <div className="card mb-3">
                                <div className="card-body">
                                    <div className="d-flex justify-content-between">
                                        <div className="d-flex flex-row align-items-center">

                                            <div className="ms-3">
                                                <h5>{c.name}</h5>
                                                <p className="small mb-0">{c.desc}</p>
                                                {/* .substring(0, 120)}{'.....' */}
                                            </div>
                                        </div>
                                        <div className="d-flex flex-row align-items-center">
                                            <div style={{ width: 150, display: 'flex' }}>

                                                {/* <Button onClick={() => handleDec(c.pid)}><RemoveIcon /></Button> */}
                                                <h5 className="fw-normal mb-0">{c.qty}</h5>
                                                {/* <Button onClick={() => handleInc(c.pid)}><AddIcon /></Button> */}
                                            </div>
                                            <div style={{ width: 80 }}>

                                                <h5 className="mb-0">${c.price}</h5>
                                            </div>
                                            {/* <a href="#!" style={{ color: '#cecece' }}><i className="fas fa-trash-alt" /></a> */}
                                            {/* <IconButton style={{ color: 'red' }} aria-label="delete" onClick={() => handleDelete(c.pid)}> */}
                                            {/* <IconButton style={{ color: 'red' }} aria-label="delete" > */}
                                            {/* <DeleteIcon />
                                                </IconButton> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }

                {/* <div className=''>
                        <p>{Total}</p>
                    </div> */}

            </div>
        </section>

    );
}

export default Favorite;