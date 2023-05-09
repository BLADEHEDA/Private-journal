// import React from "react";
import { useState } from 'react';
import { Formik, Form,ErrorMessage,Field, useFormik } from "formik";
import * as yup from "yup";
import Modal from './Modal';


/**
 * FormikErrorMessage Component
 */
const FormikErrorMessage = ({ name }) => {
    return (
      <ErrorMessage name={name}>
        {(errMessage) => {
          return <div style={{ color: "red" }}>{errMessage}</div>;
        }}
      </ErrorMessage>
    );
  };
  
// subjected to changes 
const FormikField = ({ name, type, label }) => {
    return (
      <Field name={name}>
        {(formikField) => {
          return (
            <>
              <label htmlFor={name} style={{ display: "block" }}>
                {label}
              </label>
              <input
              className="block form-input w-full rounded border py-1 px-2 "
                type={type}
                id={name}
                {...formikField.field}
                defaultChecked={formikField.field.value}
              />
              <FormikErrorMessage name={name} />
              {/* <pre>{JSON.stringify(formikField, null, 4)}</pre> */}
            </>
          );
        }}
      </Field>
    );
  };

/**
 * LoginFormikComponents Component
 */
const LoginFormikComponents = () => {
    // subjected to changes 
    // subjected to cxhanges 
 const confirmbtn =()=>{
    props.showmodal()
    props.setShowModal(false)
  
   }
    // the forllowing code is to hide and show the modal component 
const [showModal , setShowModal]= useState(false)
// end of subjected to changes 
  const initialValues = {
    firstname:"",
    lastname:"",
    email: "",
    password: "",
    phonenumber: "",
    city: "",
    code: "",
    rememberMe: false,
  };
//   const onSubmit = (values) => console.log(JSON.stringify(values, null, 4));
  const onSubmit=()=>{
    alert("yo bro")
    setShowModal(true) 
    showmodal()
  }
  const validationSchema = yup.object({
    firstname:
     yup.string()
     .required(),
    lastname:
    yup.string()
    .required(),
    email: 
       yup.string()
      .email("Please enter a valid email address")
      .required("Email field is required"),
    password: yup.string().required("Password field is required"),
    phonenumber: yup.string().required(),
    city: yup.string().required(),
    code: yup.string().optional(),
  });


  
// /display the modal values on
const showmodal=()=>{
    // alert(`Hello bro whats up 
    // car: ${formik.values.car}. 
    // firstnaame: ${formik.values.firstname}. 
    // lastnaame: ${formik.values.lastname}.
    // Email: ${formik.values.email}.
    // password: ${formik.values.password}.
    // phonenumber: ${formik.values.phonenumber}.
    // city: ${formik.values.city}.
    // invitecode: ${formik.values.invitecode}
    //  `);  
    alert("hello ")
    // formik.resetForm();
  }
  return (
    <main>  
    <Formik
      initialValues={initialValues}
      onSubmit={
        onSubmit
    }
      validationSchema={validationSchema}
    >
      {(formik) => {
        return (
          <Form>
            <div style={{ padding: 20 }}>
            <FormikField label="First name" name="firstname" type="text" />
            <FormikField label="Last name" name="lastname" type="text" />
              <FormikField label="Email" name="email" type="email" />
              <FormikField label="Password" name="password" type="password" />
              <FormikField label="Phone number" name="phone" type="tel" />
              <FormikField label="city you'll drive in  " name="city" type="text" />
              <FormikField label="invite code(optional) " name="code" type="text" />
              
              {/* <FormikField
                label="Remember Me"
                name="rememberMe"
                type="checkbox"
              /> */}
              <button  onClick={onSubmit}  style={{ display: "block" }}>submit</button>
            </div>
            {/* <pre>{JSON.stringify(formik, null, 4)}</pre> */}
          </Form>
        );
      }}
    </Formik>
    {showModal? (<Modal showModal={showModal} setShowModal={setShowModal}
          showmodal={showmodal}  />):null }
    </main>
  );
};
export default LoginFormikComponents;