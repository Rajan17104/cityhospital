import React from 'react';
import Customcard from '../../UI/Customcard';

function ListMedicines({ mdata }) {
    return (
        <>
            {
                mdata.map((v, i) => {
                    return (
                        <div className='col-md-3 justify-content-between g-3'>
                            <Customcard values={v} />
                        </div>

                    )
                })
            }

        </>
    );
}

export default ListMedicines;