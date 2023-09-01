import { useFormik } from 'formik';
import React from 'react';
import * as yup from 'yup';

function Validation1(props) {

    let valiSchema = yup.object({
        name: yup.string().required().matches(/^[a-zA-Z\s]+$/),
        email: yup.string().email().required(),
        password: yup.string().required(),
        confpassword: yup.string().test("confpassword", 'please enter a correct password',
            function (val) {
                if (this.parent.password === val) {
                    return true;
                } else {
                    return false;
                }
            }
        ),
        mobile: yup.number().required(),
        age: yup.number().required(),
        gender: yup.string().required(),
        country: yup.string().required(),
        hobby: yup.array().min(2).required(),
        date: yup.date().max(new Date()).required(),
        address: yup.string().required(),
        condition: yup.boolean().oneOf([true]).required()
    })

    const formik = useFormik({
        validationSchema: valiSchema,

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

    const { values, errors, handleBlur,handleSubmit, handleChange, touched } = formik


    return (
        <div>
            <form action method="post" role="form" className="php-email-form" onSubmit={handleSubmit}>

                <div className="row-1">
                    <div className="col-md-6 form-group"  >
                        Name:-
                        <input type="text"
                            name="name"
                            className="form-control"
                            id="name"
                            placeholder="Your Name"
                            value={values.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        <span >{errors.name && touched.name ? errors.name : null}</span>
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
                        <span >{errors.email && touched.email ? errors.email : null}</span>

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
                        <span > {errors.password && touched.password ? errors.password : null}</span>

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
                        <span > {errors.confpassword && touched.confpassword ? errors.confpassword : null}</span>

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
                        <span > {errors.mobile_no && touched.mobile_no ? errors.mobile_no : null}</span>

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
                        <span > {errors.age && touched.age ? errors.age : null}</span>

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
                            <span > {errors.gender && touched.gender ? errors.gender : null}</span>
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
                        <span > {errors.country && touched.country ? errors.country : null}</span>
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
                        <span > {errors.hobby && touched.hobby ? errors.hobby : null}</span>

                        <div className="col-md-12 form-group">
                            Address:-
                            <textarea
                                className="form-control"
                                name="address"
                                placeholder="Fill Your Address"
                                rows={5}
                                value={values.address}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            <span > {errors.address && touched.address ? errors.address : null}</span>

                        </div>

                        <div className="col-md-12 form-group">
                            Date Of Birth:-
                            <input
                                type="date"
                                name="date"
                                className="form-control"
                                id="Date"
                            />
                            <span > {errors.date && touched.date ? errors.date : null}</span>

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
                            {/* Terms & Condition */}
                            <span > {errors.condition && touched.condition ? errors.condition : null}</span>

                        </div>
                    </div>
                    <div className="text-cente"><button type="submit">submit</button></div>

                </div>
            </form>
        </div>
    );
}

export default Validation1;