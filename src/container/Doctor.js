import React from 'react';
import { useParams } from 'react-router-dom';

const doctordata = [
  {
    id: 1,
    name: 'Atha Smith',
    designation: 'Chief Medical Officer',
    description: 'Duis sagittis rutrum neque, quis tincidunt arcu pretium ac.',
    url: "../assets/img/doctors/doctors-1.jpg"

  },
  {
    id: 2,
    name: 'John White',
    designation: 'Anesthesiologist',
    description: 'Aenean ac turpis ante. Mauris velit sapien.',
    url: "../assets/img/doctors/doctors-2.jpg"

  },
  {
    id: 3,
    name: 'Umika Loha',
    designation: 'Cardiology',
    description: 'Curabitur luctus eleifend odio. Phasellus placerat mi.',
    url: "../assets/img/doctors/doctors-3.jpg"

  },
  {
    id: 4,
    name: 'Daimy Smith',
    designation: 'Neurosurgeon',
    description: 'Morbi vulputate, tortor nec pellentesque molestie, eros nisi ornare purus.',
    url: "../assets/img/doctors/doctors-4.jpg"

  },

]


function Doctor(props) {

  const {id} = useParams();
  
  let fdata = doctordata.filter((v) => v.id === parseInt(id))

  return (
    <div className="row">
      {
        // filterdata.map((v) => {
        //   if(id == v.id){
            // return (
              <div className="col-lg-6-">
                {/* <p>{id}</p> */}
                <div className="member d-flex align-items-start">
                  <div className="pic"><img src={fdata[0].url} className="img-doctor-" alt /></div>
                  <div className="member-info-">
                    <p><span> Dr Name :   </span> {fdata[0].name}</p>
                    <p><span>Dr Designation :   </span>{fdata[0].designation}</p> 
                    <p><span>Dr Description :   </span> {fdata[0].description}</p>
                    <div className="social-">
                      <a href><i className="ri-twitter-fill" /></a>
                      <a href><i className="ri-facebook-fill" /></a>
                      <a href><i className="ri-instagram-fill" /></a>
                      <a href><i className="ri-linkedin-box-fill" /> </a>
                    </div>
                  </div>
                </div>
              </div>
            // );
        //   }
        // })
      }
    </div>
  )
}

export default Doctor;

