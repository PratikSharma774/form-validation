import React from 'react';
import { Formik, Form } from 'formik';
import { TextField } from './TextField';
import * as Yup from 'yup';

export const Signup = () => {
  const validate = Yup.object({
    name: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('Required'),
    email: Yup.string()
      .email('Email is invalid')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 charaters')
      .required('Password is required'),
    number: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('Required')
  })
  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
        email: '',
        password: '',
      }}
      validationSchema={validate}
      onSubmit={values => {
        console.log(values)
        const response = fetch("http://localhost:8080/saveAdmin", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
        credentials: 'include', // Equivalent to withCredentials: true in Axios
        mode: 'cors', // Equivalent to crossDomain: true in Axios
      }).then (response=> 
        {return response.json()}).then(data => { console.log(data);})
      }}
    >
      {formik => (
        <div>
          <h1 className="my-4 font-weight-bold .display-4">Sign Up</h1>
          <Form>
            <TextField label="First Name" name="name" type="text" />
            <TextField label="Email" name="email" type="email" />
            <TextField label="password" name="password" type="password" />
            <TextField label="number" name="number" type="text" />
            <button className="btn btn-dark mt-3" type="submit">Register</button>
            <button className="btn btn-danger mt-3 ml-3" type="reset">Reset</button>
          </Form>
        </div>
      )}
    </Formik>
  )
}
