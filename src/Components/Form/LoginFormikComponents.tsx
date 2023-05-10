// import React from "react";
// import { useState } from 'react';
// import { Formik, Form,ErrorMessage,Field, useFormik } from "formik";;
import React, { useState } from 'react'
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
//   FieldArray,
//   FastField
} from 'formik'
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
  
//Reusable input  component field 
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


const LoginFormikComponents = () => {
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
    car: "",
    code: "",
    rememberMe: false,
  };

//   const onSubmit = (values) => console.log(JSON.stringify(values, null, 4));
  const onSubmit=()=>{
      // Reset the form after submission
    //   resetForm();
    setShowModal(true) 
  }
// subjected to  changes 
// const onSubmit = (values, submitProps) => {
//     console.log('Form data', values)
//     console.log('submitProps', submitProps)
//     submitProps.setSubmitting(false)
//     submitProps.resetForm()
//     // setShowModal(true) 
//   }


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
    car:yup.string()    
    .label('car')
    .required(),
    code: yup.string().optional(),
  });


  
// /display the modal values on
const showmodal=()=>{ 
    alert("hello ");
  }
  return (
    <main>  
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
    // onReset={handleReset}
      validationSchema={validationSchema}
    >
      {(formik) => {
        
        return (
          <Form>
    {/* subjected to changes  */}
    <section className="radio-btns mb-5">
<div className='flex  mt-3  ' >
        <input 
        type="radio"
         className='w-[50px] mr-2 bg-[black] bg-black bg-[blue] cursor-pointer '  
         id="haveCar" 
         name='car'
         value="Has Car" 
         onChange={formik.handleChange}
         checked={formik.values.car === "Has Car"}
         />
      <label htmlFor="haveCar" className=" cursor-pointer">
        I have a car
      </label>
        
        <input 
        type="radio" 
        className=' w-[50px] mr-2 bg-[black] bg-white cursor-pointer' 
        id="needCar"
        name='car' 
        value="Needs Car"
        onChange={formik.handleChange}
        checked={formik.values.car === "Needs Car"}
         />
      <label htmlFor="needCar" className=" cursor-pointer">
        I need a car
      </label>    
      </div>
      {formik.touched.car && formik.errors.car && (
              <span className='text-red-400'>{formik.errors.car}</span>
            )}
    </section>
    {/* end of subjeced changes  */}
            <div style={{ padding: 20 }}>
            <FormikField label="First name" name="firstname" type="text" />
            <FormikField label="Last name" name="lastname" type="text" />
              <FormikField label="Email" name="email" type="email" />
              <FormikField label="Password" name="password" type="password" />
              <FormikField label="Phone number" name="phone" type="tel" />
              <FormikField label="city you'll drive in  " name="city" type="text" />
              <FormikField label="invite code(optional) " name="code" type="text" />
              <button   onClick={onSubmit}  style={{ display: "block" }}>submit</button>
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