import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFavourite, removeFavourite } from '../../Redux/slice/FavouriteSlice';
import { addToFavourite, removeToFavourite } from '../../Redux/action/favorite.action';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CloseIcon from '@mui/icons-material/Close';

function Favorite(props) {

    const dispatch = useDispatch();

    const medData = useSelector(state => state.medicines);
    const favData = useSelector(state => state.favourite);

    console.log(medData)
    console.log(favData);



    let favouriteData = favData.item.map((v) => {
        let Fdata = medData.medicines.find((m) => m.id === v.pid)

        let fData = { ...Fdata, ...v }

        return fData

    })

    console.log(favouriteData);

    // const handleAddfavourite = (id) => {
    //     dispatch(addFavourite(id))
    // }

    const removeFavourite = (id) => {
        dispatch(removeToFavourite(id))
    }

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
                <></>
                {
                    favouriteData.map((c) => {
                        return (
                            <div className="card mb-3">
                                <div className="card-body">
                                    <div className="d-flex justify-content-between">
                                        <div className="d-flex flex-row align-items-center">

                                            <div className="ms-3">
                                                <h5>{c.name}</h5>
                                                <p className='small mb-0'>
                                                    {c.desc.substring(0, 150)}
                                                    {"....."} </p>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-row align-items-center">
                                            {/* <div style={{ width: 150, display: 'flex' }}>
                                                <h5 className="fw-normal mb-0">{c.qty}</h5>
                                            </div> */}
                                            <div style={{ width: 80 }}>

                                                <h5 className="mb-0">${c.price}</h5>
                                            </div>
                                            <CloseIcon  onClick={() => removeFavourite(c.id)} />
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

export default Favorite;