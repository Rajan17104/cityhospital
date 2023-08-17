import React from 'react';
import Customcard from '../../component/UI/Customcard';
import { Link } from 'react-router-dom';

function ListMedicines({ mdata, cart }) {
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