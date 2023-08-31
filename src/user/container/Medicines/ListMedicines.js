import React from 'react';
import Customcard from '../../component/UI/Customcard';
import { Link } from 'react-router-dom';

function ListMedicines({ mdata, cart, handlefav, item, removefav,favouriteTrue, addFavourite, removeFavorite, favourite }) {
    return (
        <>
            {
                mdata.map((v) => {
                    return (

                        <div className='col-md g-5'>
                            {/* <Link to={`/medi-details/${v.id}`}> */}
                            <Customcard
                                values={v}
                                btnVal={"Add to cart"}
                                btnText={"See more..."}
                                onclick1={cart}
                                onclick2={handlefav}
                                removefav={removefav}
                                item={item ? item.some((m) => m.pid === v.id) : null}
                                favouriteTrue={true}
                            // addFavorite={addFavorite}
                            // removeFavorite={removeFavorite}
                            // favourite={favourite ? favourite.some((f) => f.foid === v.id) : null}
                            // favouriteTrue={true}
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