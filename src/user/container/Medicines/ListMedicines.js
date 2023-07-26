import React from 'react';
import Customcard from '../../component/UI/Customcard';

function ListMedicines({ mdata, cart }) {
    return (
        <>
            {
                mdata.map((v, i) => {
                    return (
                        <div className='col-md-4 justify-content-between g-4'>
                            <Customcard
                            
                                values={v}
                                btnVal={"Add to cart"}
                                onclick1={cart}
                            />
                        </div>

                    )
                })
            }

        </>
    );
}

export default ListMedicines;