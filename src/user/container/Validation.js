import { useFormik } from 'formik';
import { SnackbarProvider, enqueueSnackbar } from 'notistack';
import React from 'react';
import * as yup from 'yup';

function Validation(props) {

    let userSchema = yup.object({
        name: yup.string().required('please enter a name').matches(/^[a-zA-Z ]+$/, 'please enter a valid name')
            .test(
                function (val) {
                    let arr = val.split("")
                    console.log(arr);
                    if (arr.length < 3) {
                        return false;
                    } else {
                        return true;
                    }
                }),
        email: yup.string().email().required('please enter a email'),
        password: yup.string().required('please enter a password').matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, 'please enter a valid password'),
        confpassword: yup.string().test('confpassword', 'password is not match',
            function (val) {
                if (this.parent.password === val) {
                    return true;
                } else {
                    return false;
                }
            }
        ),
        mobile_no: yup.string().required('please enter a mobile number').matches((/^(\+\d{1,3}[- ]?)?\d{10}$/), 'please enter a valid mobile number'),
        age: yup.number().required('please enter your age').min(0).max(150),
        gender: yup.string().required('please select a gender'),
        country: yup.string().required('please select a country'),
        hobby: yup.array().min(2).required(),
        date: yup.string().required('please select a date'),
        address: yup.string().required('please enter your address')
            .test('Address', 'maxmium 3 word allowed.', function (val) {
                let arr = val.split(" ");

                if (arr.length > 3) {
                    return false
                } else {
                    return true
                }
            }),
        date: yup.date().max(new Date(), "Enter a Valid Date").required(),
        condition: yup.boolean().oneOf([true]).required('please select Your condition'),

    });

    const formik = useFormik({
        validationSchema: userSchema,

        initialValues: {
            name: '',
            email: '',
            password: '',
            confpassword: '',
            mobile_no: '',
            age: '',
            gender: '',
            country: '',
            hobby: '',
            address: '',
            date: '',
            condition: false

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
                            Name:-
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
                            Email:-
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
                            Password:-
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
                            Conform Password
                            <input type='password'
                                className="form-control"
                                name="confpassword"
                                id="confpassword"
                                placeholder="conform password"
                                value={values.confpassword}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            <span className='fromError' style={{ color: 'red' }}>{errors.confpassword && touched.confpassword ? errors.confpassword : null}</span>
                        </div>
                        <div className="col-md-6 form-group mt-3 mt-md-0">
                            Mobile No:-
                            <input type='number'
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
                        <div className="col-md-6 form-group mt-3 mt-md-0">
                            Age:-
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

                        <div className="col-md-6 form-group mt-3 mt-md-0" >
                            <div className="col-md-12 form-group">
                                Gender:-
                                <input
                                    type="radio"
                                    name="gender"
                                    value={"Male"}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />Male
                                <input
                                    type="radio"
                                    name="gender"
                                    value={"Female"}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />Female<br />
                                <span className='fromError' style={{ color: 'red' }}>{errors.gender && touched.gender ? errors.gender : null}</span>
                            </div>


                            <div>
                                Country:-
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

                            <div className="col-md-12 form-group">
                                Hobby:-
                                <input
                                    type={"checkbox"}
                                    name='hobby'
                                    value={"gaming"}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />gaming

                                <input
                                    type={"checkbox"}
                                    name='hobby'
                                    value={"sports"}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />sports


                                <input
                                    type={"checkbox"}
                                    name='hobby'
                                    value={"movie"}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />movie

                                <input
                                    type={"checkbox"}
                                    name='hobby'
                                    value={"music"}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />music

                            </div>
                            <span className='fromError' style={{ color: 'red' }}>{errors.hobby && touched.hobby ? errors.hobby : null}</span>

                            <div className="col-md-12 form-group">
                                Address:-
                                <textarea
                                    className="form-control"
                                    name="address"
                                    placeholder="Fill Your Address"
                                    value={values.address}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    rows={5}
                                />
                                <span className='fromError' style={{ color: 'red' }}>{errors.address && touched.address ? errors.address : null}</span>


                            </div>

                            <div className="col-md-12 form-group">
                                Date Of Birth:-
                                <input
                                    type="date"
                                    name="date"
                                    className="form-control"
                                    id="Date"
                                />
                                <span className='fromError' style={{ color: 'red' }}>{errors.date && touched.date ? errors.date : null}</span>

                            </div>

                            <div className="col-md-12 form-group">
                                Condition:-
                                <input
                                    type="checkbox"
                                    name="condition"
                                    value={values.condition}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {/* Terms &amp; Condition */}

                                <span className='error' style={{ color: 'red' }}>{errors.condition && touched.condition ? errors.condition : null}</span>
                            </div>
                        </div>
                    </div>
                    <div className="text-cente"><button type="submit">submit</button></div>
                </form>
            </div>

            <div>
                <SnackbarProvider />
                <button style={{height: '30px' , backgroundColor: 'blue'}} onClick={() => enqueueSnackbar('That was easy!')}>Show snackbar</button>
                <button style={{height: '30px' ,  marginLeft: '10px', backgroundColor: 'green'}} onClick={() => enqueueSnackbar('I love hooks')}>Show snackbar</button>           
            </div>
        </section>
    );
}

export default Validation;