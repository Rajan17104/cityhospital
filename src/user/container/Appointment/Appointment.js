import React from 'react';
import Button from '../../component/UI/Button/Button';
import { useFormik } from 'formik';
import * as yup from 'yup';

function Appointment(props) {

  var d = new Date();
  let nd = new Date(d.setDate(d.getDate() - 1));

  let AppointmentSchema = yup.object({
    name: yup.string().required().matches(/^[a-zA-Z ]+$/, 'please enter a valid name'),
    email: yup.string().email().required('please enter a email'),
    phone: yup.string().required().matches(/^(\+\d{1,3}[- ]?)?\d{10}$/),
    date: yup.date().min(nd, 'enter valid date').required('Please enter date'),
    department: yup.string().required(),
    message: yup.string().required('please enter your address')
      .test('Address', 'maxmium 3 word allowed.', function (val) {
        let arr = val.split(" ");

        if (arr.length > 3) {
          return false
        } else {
          return true
        }
      }),

  })

  const formik = useFormik({
    validationSchema: AppointmentSchema,
    initialValues: {
      name: '',
      email: '',
      phone: '',
      date: '',
      department: '',
      message: ''
    },
    onSubmit: (values, action) => {
      console.log(values);

    },
  });

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = formik;

  return (
    <section id="appointment" className="appointment">
      <div className="container">
        <div className="section-title">
          <h2>Make an Appointment</h2>
          <p>Aenean enim orci, suscipit vitae sodales ac, semper in ex. Nunc aliquam eget nibh eu euismod. Donec dapibus
            blandit quam volutpat sollicitudin. Fusce tincidunt sit amet ex in volutpat. Donec lacinia finibus tortor.
            Curabitur luctus eleifend odio. Phasellus placerat mi et suscipit pulvinar.</p>
        </div>
        <form onSubmit={handleSubmit} action method="post" role="form" className="php-email-form" >
          <div className="row">
            <div className="col-md-4 form-group">
              <input type="text"
                name="name"
                className="form-control"
                id="name"
                placeholder="Your Name"
                data-rule="minlen:4"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                data-msg="Please enter at least 4 chars"
              />
              <span style={{ color: 'red' }}>{errors.name && touched.name ? errors.name : null}  </span>
            </div>

            <div className="col-md-4 form-group mt-3 mt-md-0">
              <input type="email"
                className="form-control"
                name="email"
                id="email"
                placeholder="Your Email"
                data-rule="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                data-msg="Please enter a valid email"
              />
              <span style={{ color: 'red' }}>{errors.email && touched.email ? errors.email : null}  </span>
            </div>

            <div className="col-md-4 form-group mt-3 mt-md-0">
              <input type="tel"
                className="form-control"
                name="phone"
                id="phone"
                placeholder="Your Phone"
                data-rule="minlen:4"
                value={values.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                data-msg="Please enter at least 4 chars"
              />
              <span style={{ color: 'red' }}>{errors.phone && touched.phone ? errors.phone : null}  </span>
              <div className="validate" />
            </div>

          </div>

          <div className="row">
            <div className="col-md-4 form-group mt-3">
              <input type="date"
                name="date"
                className="form-control datepicker"
                id="date"
                placeholder="Appointment Date"
                data-rule="minlen:4"
                value={values.date}
                onChange={handleChange}
                onBlur={handleBlur}
                data-msg="Please enter at least 4 chars"
              />
              <span style={{ color: 'red' }}>{errors.date && touched.date ? errors.date : null}  </span>


            </div>

            <div className="col-md-4 form-group mt-3">
              <select
                name="department"
                id="department"
                className="form-select"
                value={values.department}
                onChange={handleChange}
                onBlur={handleBlur}
              >
                <option value="">Select Department</option>
                <option value="Dep1">Department 1</option>
                <option value="Dep2">Department 2</option>
                <option value="Dep3">Department 3</option>
              </select>
              <span className='fromError' style={{ color: 'red' }}>{errors.department && touched.department ? errors.department : null}</span>

            </div>
          </div>

          <div className="form-group mt-3">
            <textarea className="form-control"
              name="message"
              rows={5}
              placeholder="Message (Optional)"
              value={values.message}
              onChange={handleChange}
              onBlur={handleBlur}
              defaultValue={""}
            />
            <span className='fromError' style={{ color: 'red' }}>{errors.message && touched.message ? errors.message : null}</span>
          </div>

          <div className="mb-3">
            <div className="loading">Loading</div>
            <div className="error-message" />
            <div className="sent-message">Your appointment request has been sent successfully. Thank you!</div>
          </div>
          <div className="text-center"><button type="submit">Make an Appointment</button  ></div>
        </form>
      </div>
    </section>

  );
}

export default Appointment;