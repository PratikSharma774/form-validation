import React from 'react';
import { Formik, Form } from 'formik';
import { TextField } from './TextField';
import * as Yup from 'yup';

export const AddEmployee = () => {
  const validate = Yup.object({
    name: Yup.string()
    .max(15, 'Must be 15 characters or less')
    .required('Required'),
    eid: Yup.string()
    .max(15, 'Must be 15 characters or less')
    .required('Required'),
  email: Yup.string()
    .email('Email is invalid')
    .required('Email is required'),
  salary: Yup.string()
    .min(6, 'Salary must be at least 6 charaters')
    .required('Salary is required'),
  department: Yup.string()
    .max(5, 'Must be 5 characters or less')
    .required('Required'),
    experience: Yup.string()
    .max(5, 'Must be 5 characters or less')
    .required('Required'),
  })
  return (
    <Formik
      initialValues={{
        name: '',
        eid: '',
        email: '',
        salary: '',
        department: '',
        experience: ''
      }}
      validationSchema={validate}
      onSubmit={values => {
        console.log(values)

        const response = fetch("http://localhost:8080/addEmployee", {
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
          <h1 className="my-4 font-weight-bold .display-4">Add User Data</h1>
          <Form>
            <TextField label="Enter Name" name="name" type="text" />
            <TextField label="Employee ID" name="eid" type="text" />
            <TextField label="Email" name="email" type="email" />
            <TextField label="Salary" name="salary" type="text" />
            <TextField label="Department" name="department" type="text" />
            <TextField label="Experience" name="experience" type="text" />
            <button className="btn btn-success mt-3 ml-3" type="submit">Add</button>
          </Form>
        </div>
      )}
    </Formik>
  )
}
