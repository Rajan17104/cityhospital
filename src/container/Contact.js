import { useFormik } from 'formik';
import React from 'react';
import { signUpSchema } from '../schemas';

function Contact(props) {

  const initialValues = {
    name: "",
    email: "",
    subject: "",
    message: ""
  };


  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: signUpSchema,
    onSubmit: (values, action) => {
      console.log(values);
      action.resetForm();
    }
  })




  return (
    <section id="contact" className="contact">ّ
      <div className="container">
        <div className="section-title">
          <h2>Contact</h2>
          <p>Aenean enim orci, suscipit vitae sodales ac, semper in ex. Nunc aliquam eget nibh eu euismod. Donec dapibus
            blandit quam volutpat sollicitudin. Aenean ac turpis ante. Mauris velit sapien, aliquet aliquet rhoncus quis,
            luctus at neque. Mauris sit amet massa sed orci vehicula facilisis.</p>
        </div>
      </div>
      <div className="container">
        <div className="row mt-5">
          <div className="col-lg-4">
            <div className="info">
              <div className="address">
                <i className="bi bi-geo-alt" />
                <h4>Location:</h4>
                <p> F-505, Inovative Plazza New Delhi, India</p>
              </div>
              <div className="email">
                <i className="bi bi-envelope" />
                <h4>Email:</h4>
                <p>cityhospital@example.com</p>
              </div>
              <div className="phone">
                <i className="bi bi-phone" />
                <h4>Call:</h4>
                <p>+91 9988776655</p>
              </div>
            </div>
          </div>
          <div className="col-lg-8 mt-5 mt-lg-0">
            <form onSubmit={handleSubmit} onChange={handleChange}  onBlur={handleBlur} action method="post" role="form" className="php-email-form">
              <div className="row">
                <div className="col-md-6 form-group"  >
                  <input type="text"
                    name="name"
                    className="form-control"
                    id="name"
                    placeholder="Your Name"
                    value={values.name}
                  onBlur={handleBlur}
                  // onChange={handleChange}

                  />
                  {errors.name && touched.name  ?
                    <p className='formError' style={{ color: 'red' }}>{errors.name}</p>: null
                  }
                 

                </div>
                <div className="col-md-6 form-group mt-3 mt-md-0">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                    value={values.email}
                  // onChange={handleChange}
                  // onBlur={handleBlur}
                  />
                  {errors.email && touched.email ?
                    <p className='formError' style={{ color: 'red' }}>{errors.email}</p> :
                    null
                  }
                </div>
              </div>
              <div className="form-group mt-3">
                <input type="text"
                  className="form-control"
                  name="subject"
                  id="subject"
                  placeholder="Subject"
                  value={values.subject}
                // onChange={handleChange}
                // onBlur={handleBlur}
                />
                {errors.subject && touched.subject ?
                  <p className='formError' style={{ color: 'red' }}>{errors.subject}</p> :
                  null
                }
              </div>
              <div className="form-group mt-3">
                <textarea className="form-control"
                  name="message"
                  rows={5} placeholder="Message"
                  value={values.message}
                // onChange={handleChange} 
                // onBlur={handleBlur}
                />
                {errors.message && touched.message ?
                  <p className='formError' style={{ color: 'red' }}>{errors.message}</p> :
                  null
                }
              </div>
              <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message" />
                <div className="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div className="text-center"><button type="submit">Send Message</button></div>
            </form>
          </div>
        </div>
      </div>
    </section>

  );
}

export default Contact;


