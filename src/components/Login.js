import React from 'react';
import { Formik, Form } from 'formik';
import { TextField } from './TextField';
import * as Yup from 'yup';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

export const Login = ({user,setUser}) => {
  const validate = Yup.object({
    email: Yup.string()
      .email('Email is invalid')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 charaters')
      .required('Password is required')

  })
  if (user === "Login Success") {
    return <Navigate to="/adminLogin" replace={true}/>;
  }
  return (
    <Formik
      initialValues={{
        email: '',
        password: ''

      }}
      validationSchema={validate}
      onSubmit={values => {
        console.log(values)
      //   const response = fetch.post("http://localhost:8080/login",
      //     JSON.stringify({ values }),
      //     {
      //         headers: { 'Content-Type': 'application/json' },
      //         withCredentials: true,
      //         crossDomain: true,
      //         'Access-Control-Allow-Credentials': true
              
      //     }
      // );
      // console.log(JSON.stringify(response?.data));

      const response = fetch("http://localhost:8080/login", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
        credentials: 'include', // Equivalent to withCredentials: true in Axios
        mode: 'cors', // Equivalent to crossDomain: true in Axios
      }).then (response=> 
        {return response.json()}).then(data => { console.log(data); setUser(data.message)})
      }}

      
    >
      {formik => (
        <div>
          <h1 className="my-4 font-weight-bold .display-4">Sign In</h1>
          <Form>
            <TextField label="Email" name="email" type="email" />
            <TextField label="password" name="password" type="password" />
            <button className="btn btn-dark mt-3" type="submit">Login</button>
          </Form>
        </div>
      )}
    </Formik>
  )
}
