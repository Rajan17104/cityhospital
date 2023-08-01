import React from 'react';
import Customcard from '../../component/UI/Customcard';

function ListDepartment({ mdata, cart }) {
    return (
        <>
            {
                mdata.map((v) => {
                    return (
                        <div className='col-md-4 justify-content-between g-4'>
                            <Customcard
                            
                                values={v}
                                btnVal={"Add to cart"}
                                // onclick1={cart}
                            />
                        </div>

                    )
                })
            }

        </>
    );
}

export default ListDepartment;