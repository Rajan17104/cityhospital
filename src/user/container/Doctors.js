import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Title } from '../component/UI/Subtitel/subtitel.style';
import Card from '../component/UI/Card/Card';
import { H2 } from '../component/UI/Heading/heading.style';


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

// let theme = useContext(ThemeContext) 

function Doctors(props) {
  return (
    <section id="doctors" className="doctors">
      <div className="container">
        <div className="section-title">
          <H2 className="heading" >Doctors</H2>
          <Title>Duis sagittis rutrum neque, quis tincidunt arcu pretium ac. Suspendisse sem risus, molestie vitae arcu et,
            tincidunt viverra erat. Quisque in lectus id nulla viverra sodales in a risus. Aliquam ut sem ex. Duis viverra
            ipsum lacus, ut pharetra arcu sagittis nec. Phasellus a eleifend elit.
          </Title>
          {/* <Link to='/doctor/1'>Doctor 1</Link><br/>
          <Link to='/doctor/2'>Doctor 2</Link><br/>
          <Link to='/doctor/visiting_doctor'>Visiting Doctor</Link> */}
        </div>
        <div className="row">
          {
            doctordata.map((v) => {
              return (

                <div className="col-lg-6">
                  <div className='doctor-b'>
                    <Link to={`/doctor/${v.id}`}>
                      <Card className="member d-flex align-items-start">
                        <div className="pic"><img src={v.url} className="img-doctor" alt='' /></div>
                        <div className="member-info">
                          <h4>{v.name}</h4>
                          <span>{v.designation}</span>
                          <Title>{v.description}</Title>
                          <div className="social">
                            <a href><i className="ri-twitter-fill" /></a>
                            <a href><i className="ri-facebook-fill" /></a>
                            <a href><i className="ri-instagram-fill" /></a>
                            <a href><i className="ri-linkedin-box-fill" /> </a>
                          </div>
                        </div>
                      </Card>
                    </Link>
                  </div>
                </div>
              )
            })

          }

          {/* <div className="row">
      <div className="col-lg-6">
        <div className="member d-flex align-items-start">
          <div className="pic"><img src="../assets/img/doctors/doctors-1.jpg" className="img-doctor" alt /></div>
          <div className="member-info">
            <h4>Atha Smith</h4>
            <span>Chief Medical Officer</span>
            <Title>Duis sagittis rutrum neque, quis tincidunt arcu pretium ac.</Title>
            <div className="social">
              <a href><i className="ri-twitter-fill" /></a>
              <a href><i className="ri-facebook-fill" /></a>
              <a href><i className="ri-instagram-fill" /></a>
              <a href> <i className="ri-linkedin-box-fill" /> </a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-6 mt-4 mt-lg-0">
        <div className="member d-flex align-items-start">
          <div className="pic"><img src="../assets/img/doctors/doctors-2.jpg" className="img-doctor" alt /></div>
          <div className="member-info">
            <h4>John White</h4>
            <span>Anesthesiologist</span>
            <Title>Aenean ac turpis ante. Mauris velit sapien.</Title>
            <div className="social">
              <a href><i className="ri-twitter-fill" /></a>
              <a href><i className="ri-facebook-fill" /></a>
              <a href><i className="ri-instagram-fill" /></a>
              <a href> <i className="ri-linkedin-box-fill" /> </a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-6 mt-4">
        <div className="member d-flex align-items-start">
          <div className="pic"><img src="../assets/img/doctors/doctors-3.jpg" className="img-doctor" alt /></div>
          <div className="member-info">
            <h4>Umika Loha</h4>
            <span>Cardiology</span>
            <Title>Curabitur luctus eleifend odio. Phasellus placerat mi.</Title>
            <div className="social">
              <a href><i className="ri-twitter-fill" /></a>
              <a href><i className="ri-facebook-fill" /></a>
              <a href><i className="ri-instagram-fill" /></a>
              <a href> <i className="ri-linkedin-box-fill" /> </a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-6 mt-4">
        <div className="member d-flex align-items-start">
          <div className="pic"><img src="../assets/img/doctors/doctors-4.jpg" className="img-doctor" alt /></div>
          <div className="member-info">
            <h4>Daimy Smith</h4>
            <span>Neurosurgeon</span>
            <Title>Morbi vulputate, tortor nec pellentesque molestie, eros nisi ornare purus.</Title>
            <div className="social">
              <a href><i className="ri-twitter-fill" /></a>
              <a href><i className="ri-facebook-fill" /></a>
              <a href><i className="ri-instagram-fill" /></a>
              <a href> <i className="ri-linkedin-box-fill" /> </a>
            </div>
          </div>
        </div>
    </div>*/}
        </div>
      </div>
    </section>

  );
}

export default Doctors;