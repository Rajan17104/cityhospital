import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Card from '../../component/UI/Card/Card';

function MedicineDetails(props) {

    const { id } = useParams();

    const medicines = useSelector(state => state.medicines)
    console.log(medicines);

    let mdata = medicines.medicines

    let fdata = mdata.filter((v) => v.id === parseInt(id))
    console.log(fdata);

    const dispatch = useDispatch()


    // console.log(fdata);

    return (
        <>
            <div className="row">
                <div className="col-lg-6-">
                    {/* <p>{id}</p> */}
                    <div className="member d-flex align-items-start">
                        {/* <div className="pic"><img src={fdata[0].url} className="img-doctor-" alt /></div> */}
                        <div className="member-info-">
                            <p><span> Medicine Name :   </span> {fdata[0].name}</p>
                            <p><span>Medicine Price :   </span>{fdata[0].price}</p>
                            <p><span>Expiry Date :   </span>{fdata[0].expiry}</p>
                            <p><span>Medicine Description :   </span> {fdata[0].desc.substring(0, 120)}{'........'} </p>
                            <div className="social-">
                                <a href><i className="ri-twitter-fill" /></a>
                                <a href><i className="ri-facebook-fill" /></a>
                                <a href><i className="ri-instagram-fill" /></a>
                                <a href><i className="ri-linkedin-box-fill" /> </a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default MedicineDetails;