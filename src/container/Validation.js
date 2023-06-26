import { useFormik } from 'formik';
import React from 'react';
import * as yup from 'yup';

function Validation(props) {

    let userSchema = yup.object({
        name: yup.string().required('please enter a name').matches(/^[a-zA-Z ]+$/, 'please enter a valid name')
        .test(
            function (val) {

                let arr = val.split(' ')
                console.log(arr);
                if (arr.length > 3) {
                    return false;
                } else if(arr.length > 3) {
                    return false;
                } else {
                    return true;
                }

            }),
        email: yup.string().email().required('please enter a email'),
        password: yup.string().required('please enter a password').matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, 'please enter a valid password'),
        confpassword: yup.string().oneOf([yup.ref('password'),null],'password must matech'),
        mobile_no: yup.string().required('please enter a mobile number').matches((/^(\+\d{1,3}[- ]?)?\d{10}$/), 'please enter a valid mobile number'),
        age: yup.number().required('please enter your age').min(0).max(150),
        gender: yup.string().required('please select a gender'),
        country: yup.string().required('please select a country'),
        date: yup.string().required('please select a date'),
        address: yup.string().required('please enter your address',
            function (val) {
                if (val <= 50) {
                    return true;
                } else {
                    return false;
                }
            }),
    });

    const formik = useFormik({
        validationSchema: userSchema,

        initialValues: {
            name: '',
            email: '',
            password: '',
            confpassword:'',
            age:'',
            mobile_no: '',
            gender: '',
            country: '',
            date: '',
            address: ''
        },
        onSubmit: values => {

        },
    });

    const { values, errors, handleBlur, handleChange, handleSubmit, touched } = formik;

    return (
        <section id="contac" className="contact">
            <h1>Validation form</h1>
            <div className="col-lg-8 mt-5 mt-lg-0">
                <form onSubmit={handleSubmit} onChange={handleChange} onBlur={handleBlur} action method="post" role="form" className="php-email-form">
                    <div className="row-1">
                        <div className="col-md-6 form-group"  >
                            <input type="text"
                                name="name"
                                className="form-control"
                                id="name"
                                placeholder="Your Name"
                                value={values.name}
                                onBlur={handleBlur}
                                onChange={handleChange}
                            />
                            <span className='fromError' style={{ color: 'red' }}>{errors.name && touched.name ? errors.name : null}</span>
                        </div>
                        <div className="col-md-6 form-group mt-3 mt-md-0">
                            <input type="email"
                                className="form-control"
                                name="email"
                                id="email"
                                placeholder="Your Email"
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            <span className='fromError' style={{ color: 'red' }}>{errors.email && touched.email ? errors.email : null}</span>

                        </div>
            
                        <div className="col-md-6 form-group mt-3 mt-md-0">
                            <input type='password'
                                className="form-control"
                                name="password"
                                id="password"
                                placeholder="password"
                                value={values.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            <span className='fromError' style={{ color: 'red' }}>{errors.password && touched.password ? errors.password : null}</span>
                        </div>
                        <div className="col-md-6 form-group mt-3 mt-md-0">
                            <input type='password'
                                className="form-control"
                                name="confpassword"
                                id="confpassword"
                                placeholder="confpassword"
                                value={values.confpassword}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            <span className='fromError' style={{ color: 'red' }}>{errors.confpassword && touched.confpassword ? errors.confpassword : null}</span>
                        </div>
                        <div className="col-md-6 form-group mt-3 mt-md-0">
                            <input type='number'
                                className="form-control"
                                name="age"
                                id="number"
                                placeholder="Age"
                                value={values.age}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            <span className='fromError' style={{ color: 'red' }}>{errors.age && touched.age ? errors.age : null}</span>
                        </div>
                        <div className="col-md-6 form-group mt-3 mt-md-0">
                            <input type='text'
                                className="form-control"
                                name="mobile_no"
                                id="number"
                                placeholder="Mobile no"
                                value={values.mobile_no}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            <span className='fromError' style={{ color: 'red' }}>{errors.mobile_no && touched.mobile_no ? errors.mobile_no : null}</span>
                        </div>
                        <div className="col-md-6 form-group mt-3 mt-md-0" >
                            <div className="">
                                <p style={{ display: 'inline-block' }}><input type="radio"
                                    className="form-contro"
                                    name="gender"
                                    id="gender"
                                    placeholder="gender"
                                    value={values.gender}
                                    onChange={handleChange}
                                    onBlur={handleBlur}

                                />male
                                    <input type="radio"
                                        className="form-contro"
                                        name="gender"
                                        id="gender"
                                        placeholder="gender"
                                        value={values.gender}
                                        onChange={handleChange}
                                        onBlur={handleBlur}

                                    />female
                                </p>

                            </div>
                            <span className='fromError' style={{ color: 'red' }}>{errors.gender && touched.gender ? errors.gender : null}</span>
                            <div>
                                <select name="country">
                                    <option value="0">Select</option>
                                    <option value="au">Australia</option>
                                    <option value="in">India</option>
                                    <option value="us">United States</option>
                                    <option value="uk">United Kingdom</option>
                                </select>
                            </div>
                            <span className='fromError' style={{ color: 'red' }}>{errors.country && touched.country ? errors.country : null}</span>
                            <br />
                            <div className="col-md-6 form-group mt-3 mt-md-0">
                                <input type='date'
                                    className="form-control"
                                    name="date"
                                    id="date"
                                    placeholder="date"
                                    value={values.date}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                <span className='fromError' style={{ color: 'red' }}>{errors.date && touched.date ? errors.date : null}</span>
                            </div>
                            
                            <div className="col-md-6 form-group mt-3 mt-md-0">
                                <h5>address</h5>
                                <input type='address'
                                    className="form-control"
                                    name="address"
                                    id="address"
                                    placeholder="address"
                                    value={values.address}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                <span className='fromError' style={{ color: 'red' }}>{errors.address && touched.address ? errors.address : null}</span>
                            </div>
                        </div>
                    </div>
                    <div className="text-cente"><button type="submit">submit</button></div>
                </form>
            </div>
        </section>
    );
}

export default Validation;