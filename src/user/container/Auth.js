import { useFormik } from 'formik';
import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import Button from '../component/UI/Button/Button';
import Input from '../component/UI/InputBox/Input';
import Heading from '../component/UI/Heading/Heading';
function Auth(props) {

  const [authType, setAuthType] = useState('login');
  const navigate = useNavigate();


  let authObj = {}, authVal = {}

  if (authType === 'login') {
    authObj = {
      email: yup.string().email('please enter a valid email').required('please enter a email'),
      password: yup.string().required('please enter a password'),
    }
    authVal = {
      email: '',
      password: ''
    }

  } else if (authType === 'sign up') {
    authObj = {
      name: yup.string().required('plase enter a name'),
      email: yup.string().email('please enter a valid email').required('please enter a email'),
      password: yup.string().required('please enter a password'),
    }
    authVal = {
      name: '',
      email: '',
      password: ''
    }
  } else {
    authObj = {
      email: yup.string().required('please enter a password'),
    }
    authVal = {
      email: ''
    }
  }


  let authSchema = yup.object(authObj);

  const formik = useFormik({
    validationSchema: authSchema,
    initialValues: authVal,
    enableReinitialize: true,
    onSubmit: (values, action) => {
      action.resetForm();
      console.log('sdd');
      console.log(values);

      if (authType === 'login') {
        handlelogin();
      } else if (authType === 'sign up') {
        handleregister()
      } else if (authType === 'forgot') {
        handleforgot();
      }
    },
  });

  const handlelogin = () => {
    localStorage.setItem("logindata", 'true')
    navigate('/')
  }

  const handleregister = () => {

  }

  const handleforgot = () => {

  }

  const { handleBlur, handleChange, handleSubmit, values, errors, touched } = formik;


  return (
    <section id="appointment" className="appointment">
      <div className="container">
        <div className="section-title">
          {
            authType === 'login' ? <Heading>Login</Heading> :
              authType === 'sign up' ? <Heading>Sign up</Heading> : <Heading>Reset password</Heading>
          }

          {/* <p>Aenean enim orci, suscipit vitae sodales ac, semper in ex. Nunc aliquam eget nibh eu euismod. Donec dapibus
            blandit quam volutpat sollicitudin. Fusce tincidunt sit amet ex in volutpat. Donec lacinia finibus tortor.
            Curabitur luctus eleifend odio. Phasellus placerat mi et suscipit pulvinar.</p> */}
        </div>
        <form onSubmit={handleSubmit} className="php-email-form">
          <div className="row justify-content-center" >
            {
              authType === 'login' || authType === 'forgot' ? null :
                <div className="col-md-7 form-group">
                  <Input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Your Name"
                    data-rule="minlen:4"
                    data-msg="Please enter at least 4 chars"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    errorText={errors.name && touched.name ? errors.name : ''}
                  />
                  {/* <span style={{ color: 'red' }}>{errors.name && touched.name ? errors.name : null}</span> */}
                  <div className="validate" />
                </div>

            }

            <div className="col-md-7 form-group mt-3 mt-md-0">
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="Your Email"
                data-rule="email"
                data-msg="Please enter a valid email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                errorText={errors.email && touched.email ? errors.email : ''}
              />
              {/* <span style={{ color: 'red' }}>{errors.email && touched.email ? errors.email : null}</span> */}

              <div className="validate" />
            </div>

            {
              authType !== 'forgot' ?
                <div className="col-md-7 form-group mt-3 mt-md-0">
                  <Input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Your password"
                    data-rule="minlen:4"
                    data-msg="Please enter a password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    errorText={errors.password && touched.password ? errors.password : ''}
                  />
                  {/* <span style={{ color: 'red' }}>{errors.password && touched.password ? errors.password : null}</span> */}
                  <div className="validate" />
                </div> : null
            }

          </div>

          {
            authType === 'login' ?
              <div className="text-center"><Button type='primary' >Login</Button></div> :
              authType === 'sign up' ?
                <div className="text-center"><Button type='secondary' btndisable={true}>Sign up</Button></div> :
                <div className="text-center"><Button type='outline' >Submit</Button></div>
          }

        </form>
      </div>
      {
        authType === 'login' ?
          <>
            <div className='text-center'>
              <a href="#" onClick={() => setAuthType('forgot')}>  Forgot password ?</a>
              <div className='text-center'>
                <span>You have already account ? <a href="#" onClick={() => setAuthType('sign up')}> Sign up </a></span>
              </div>
            </div>
          </> :
          <div className='text-center'>
            <span>Creat new account<a href="#" onClick={() => setAuthType('login')}>  Login </a></span>
          </div>
      }<br /><br/>

    </section>

  );
}

export default Auth;