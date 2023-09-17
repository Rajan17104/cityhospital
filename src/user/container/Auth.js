import { useFormik } from 'formik';
import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import Button from '../component/UI/Button/Button';
import Input from '../component/UI/InputBox/Input';
import { Title } from '../component/UI/Subtitel/subtitel.style';
import { H2 } from '../component/UI/Heading/heading.style';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useDispatch, useSelector } from 'react-redux';
import { forgetRequest, loginRequest, signupRequest } from '../Redux/action/auth.action';
import { SnackbarProvider, enqueueSnackbar } from 'notistack';
import { CircularProgress } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';


function Auth(props) {

  const [authType, setAuthType] = useState('login');
  const provider = new GoogleAuthProvider();
  const authGoogle = getAuth();

  const auth = useSelector(state => state.auth);
  console.log(auth);
  const dispatch = useDispatch();
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
        handlelogin(values);
      } else if (authType === 'sign up') {
        handleregister(values)
      } else if (authType === 'forgot') {
        handleforgot(values);
      }
    },
  });

  const handlelogin = (values) => {
    console.log(values);

    dispatch(loginRequest(values))
    if (authType === true) {
      navigate('/')
    }
    // localStorage.setItem("logindata", 'true')
  }

  const handleregister = (values) => {
    console.log(values);

    dispatch(signupRequest(values))

    // createUserWithEmailAndPassword(auth, values.email, values.password)
    //   .then((userCredential) => {
    //     // Signed in 
    //     const user = userCredential.user;
    //     console.log(user);

    //     onAuthStateChanged(auth, (user) => {
    //       sendEmailVerification(auth.currentUser)
    //         .then(() => {
    //           console.log('Email verification sent');
    //         })
    //         .catch((error) => {
    //           const errorCode = error.code;
    //           const errorMessage = error.message;
    //           console.log(errorCode, errorMessage);
    //         });
    //     })
    //   })
    //   .catch((error) => {
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //     console.log(errorCode, errorMessage);
    //     // ..
    //   });
  }

  const handleforgot = (values) => {

    dispatch(forgetRequest(values))
    // sendPasswordResetEmail(auth, values.email)
    //   .then(() => {
    //     console.log("Password reset email sent ");
    //   })
    //   .catch((error) => {
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //     console.log(errorCode, errorMessage);

    //     // ..
    //   });
  }

  const signupWithGoogle = () => {
    signInWithPopup(authGoogle, provider)
  }

  const { handleBlur, handleChange, handleSubmit, values, errors, touched } = formik;


  return (
    <>
      <section id="appointment" className="appointment">
        <div className="container">
          <div className="section-title">
            {
              authType === 'login' ? <H2>Login</H2> :
                authType === 'sign up' ? <H2>Sign up</H2> : <H2>Reset password</H2  >
            }

            <Title>Aenean enim orci, suscipit vitae sodales ac, semper in ex. Nunc aliquam eget nibh eu euismod. Donec dapibus
              blandit quam volutpat sollicitudin. Fusce tincidunt sit amet ex in volutpat. Donec lacinia finibus tortor.
              Curabitur luctus eleifend odio. Phasellus placerat mi et suscipit pulvinar.</Title>
          </div>
          {
            auth.loading ?
              <div style={{ textAlign: 'center' }}>
                <CircularProgress style={{ color: "red" }} />
              </div>
              :
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
                    <>
                      <div className="text-center"><Button type='primary' >Login</Button></div>

                    </>
                    :

                    authType === 'sign up' ?
                      <>
                        <div className="text-center"><Button type='secondary'>Sign up</Button></div>

                      </>
                      :
                      <>
                        <div className="text-center"><Button type='outline' >Submit</Button></div>


                      </>
                }

              </form>
          }

        </div >

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
        }<br></br>

        <div style={{ textAlign: 'center' }}> ______________________OR______________________</div>

        <br></br>
        <div className="text-center google" onClick={signupWithGoogle} ><GoogleIcon /> continue With Google</div>

      </section >
    </>

  );
}

export default Auth;