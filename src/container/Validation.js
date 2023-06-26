import { useFormik } from 'formik';
import React from 'react';
import * as yup from 'yup';

function Validation(props) {

    let userSchema = yup.object({
        name: yup.string().required('please enter a name').matches(/^[a-zA-Z ]+$/, 'please enter a valid name',
            function (val) {

                let arr = val.split;
                console.log(arr);
                if (arr.length <= 3) {
                    return true;
                } else {
                    return false;
                }

            },),
        email: yup.string().email().required('please enter a email'),
        subject: yup.string().required('please enter a subject'),
        password: yup.string().required('please enter a password').matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, 'please enter a valid password'),
        mobile_no: yup.string().required('please enter a mobile number').matches((/^(\+\d{1,3}[- ]?)?\d{10}$/), 'please enter a valid mobile number'),
        gender: yup.string().required('please select a gender'),
        country: yup.string().required('please select a country'),
        date: yup.string().required('please select a date'),
        file: yup.string().required('please select a file'),
        month: yup.string().required('please select a mounth'),
        week: yup.string().required('please select a week'),
        color: yup.string().required('please select a color'),
        range: yup.string().required('please use a range'),
        search: yup.string().required('please use a search'),
        address: yup.string().required('please enter your address',
            function (val) {
                if (val <= 50) {
                    return true
                } else {
                    return false
                }
            }),
    });

    const formik = useFormik({
        validationSchema: userSchema,

        initialValues: {
            name: '',
            email: '',
            subject: '',
            password: '',
            mobile_no: '',
            gender: '',
            country: '',
            date: '',
            file: '',
            month: '',
            week: '',
            color: '',
            range: '',
            search: '',
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
                            <input type="text"
                                className="form-control"
                                name="subject"
                                id="subject"
                                placeholder="Subject"
                                value={values.subject}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            <span className='fromError' style={{ color: 'red' }}>{errors.subject && touched.subject ? errors.subject : null}</span>
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
                                <input type='file'
                                    className="form-control"
                                    name="file"
                                    id="file"
                                    placeholder="file"
                                    value={values.file}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                <span className='fromError' style={{ color: 'red' }}>{errors.file && touched.file ? errors.file : null}</span>
                            </div>
                            <div className="col-md-6 form-group mt-3 mt-md-0">
                                <h5>mounth</h5>
                                <input type='month'
                                    className="form-control"
                                    name="month"
                                    id="month"
                                    placeholder="month"
                                    value={values.month}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                <span className='fromError' style={{ color: 'red' }}>{errors.month && touched.month ? errors.month : null}</span>
                            </div>
                            <div className="col-md-6 form-group mt-3 mt-md-0">
                                <h5>week</h5>
                                <input type='week'
                                    className="form-control"
                                    name="week"
                                    id="week"
                                    placeholder="week"
                                    value={values.week}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                <span className='fromError' style={{ color: 'red' }}>{errors.week && touched.week ? errors.week : null}</span>
                            </div>
                            <div className="col-md-6 form-group mt-3 mt-md-0">
                                <h5>color</h5>
                                <input type='color'
                                    className="form-control"
                                    name="color"
                                    id="color"
                                    placeholder="color"
                                    value={values.color}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                <span className='fromError' style={{ color: 'red' }}>{errors.color && touched.color ? errors.color : null}</span>
                            </div>
                            <div className="col-md-6 form-group mt-3 mt-md-0">
                                <h5>range</h5>
                                <input type='range'
                                    className="form-control"
                                    name="range"
                                    id="range"
                                    placeholder="range"
                                    value={values.range}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                <span className='fromError' style={{ color: 'red' }}>{errors.range && touched.range ? errors.range : null}</span>
                            </div>
                            <div className="col-md-6 form-group mt-3 mt-md-0">
                                <h5>search</h5>
                                <input type='search'
                                    className="form-control"
                                    name="search"
                                    id="search"
                                    placeholder="search"
                                    value={values.search}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                <span className='fromError' style={{ color: 'red' }}>{errors.search && touched.search ? errors.search : null}</span>
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