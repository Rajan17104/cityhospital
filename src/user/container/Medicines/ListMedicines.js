import React from 'react';
import Customcard from '../../component/UI/Customcard';
import { Link } from 'react-router-dom';

function ListMedicines({ mdata, cart, addFavourite, removeFavourite, favItmes }) {
    return (
        <>
            {
                mdata.map((v) => {
                    return (

                        <div className='col-md-4 g-5'>
                            {/* <Link to={`/medi-details/${v.id}`}> */}
                            <Customcard
                                values={v}
                                btnVal={"Add to cart"}
                                onclick1={cart}

                                addFavourite={addFavourite}
                                removeFavourite={removeFavourite}
                                favItmes={favItmes ? favItmes.some((items) => items.fid === v.id) : null}
                                favouriteTrue={true}
                            />
                            {/* </Link > */}
                        </div >

                    )
                })
            }

        </>
    );
}

export default ListMedicines;