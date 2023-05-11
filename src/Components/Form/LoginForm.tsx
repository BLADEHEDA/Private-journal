
// import React from 'react';
import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Modal from './Modal';

const LoginSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().required('Email is required').email('Invalid email'),
  password: Yup.string().required('Password is required').min(7, 'Too short').max(25, 'Too long'),
  phoneNumber: Yup.string().required('Phone number is required').matches(/^[0-9]+$/, 'Must be only digits').min(7, 'Too short').max(15, 'Too long')
});
function InputField({ field, form, ...props }) {
  return (
    <div>
      <input className='form-input'   {...field} {...props} />
      {form.touched[field.name] && form.errors[field.name] && (
        <div className='text-[red] ' >{form.errors[field.name]}</div>
      )}
    </div>
  );
}

const LoginForm = () => {
  const [showModal , setShowModal]= useState(false)
  const showmodal=()=>{
    setShowModal(true)  

  }
  const handleSubmit = (values, actions) => {
    // Submit the form data in here
    alert(values);
  };

  return (
    <main>
      <Formik
      initialValues={{ name: '', email: '', password: '', phoneNumber: '' }}
      validationSchema={LoginSchema}
      onSubmit={(values, { resetForm }) => {
        showmodal()
        alert(JSON.stringify(values));
        resetForm();
      }}
    //   onSubmit={handleSubmit}
    >
      {({ handleSubmit, isSubmitting }) => (
        <Form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <Field name="name" type="text" component={InputField} />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <Field name="email" type="email" component={InputField} />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <Field name="password" type="password" component={InputField} />
          </div>
          <div>
            <label htmlFor="phoneNumber">Phone Number:</label>
            <Field name="phoneNumber" type="tel" component={InputField} />
          </div>
          <button type="submit"  disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
    {showModal? (<Modal showModal={showModal} setShowModal={setShowModal}
          showmodal={showmodal}  />):null }
    </main>
  )
}

export default LoginForm