// import React from "react";
import { useState } from 'react';
import { Formik, Form,ErrorMessage,Field } from "formik";;
import carPic from "../../assets/10109.jpg"
import * as yup from "yup";
import Modal from './Modal';


/**
 * FormikErrorMessage Component
 */
const FormikErrorMessage = ({ name }:any ) => {
    return (
      <ErrorMessage name={name}>
        {(errMessage) => {
          return <div style={{ color: "red" }}>{errMessage}</div>;
        }}
      </ErrorMessage>
    );
  };
  
//Reusable input  component field 
const FormikField = ({ name, type, label }:any ) => {
    return (
      <Field name={name}>
        {(formikField:any ) => {
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
            </>
          );
        }}
      </Field>
    );
  };


const LoginFormikComponents = () => {
    //  hide and show the modal component  
const [showModal , setShowModal]= useState(false)
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
           <section className="main-section-left ">
            <article className='block md:hidden'>
              <img src={carPic} alt="carPic " />
            </article>
            <article className="content px-2 mx-4">
              <div> 
              <h1 className='text-[30px] my-[1em] ' >Opportunity is EveryWhere</h1>
              <p>make the most of your time on the road oon the platform with the largest 
                netwok of active riders</p>
            </div>
            {/* <article className='hidden md:block mt-[28em]'>
              <img src={carPic} alt="carPic " />
            </article> */}
            </article>
        </section>
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
    <section className="radio-btns mb-5 mx-5">
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
              <section className="post-form">
              <p className="form-text">
              By proceeding, you'll agree to Uber's <a href="/"> Term of Use</a>
               and acknowledge 
              taht i have read the  <a href="/"> Privacy Policy</a>
            </p>
            <p className="form-text"> I also agree that Uber or it's representatives 
            may contact me  by email,photo or SMS(including by automated means
           ) at the email address or number i provide,
            including for marketing purposes  </p>
  
            <div className='text-center'>
            <button 
             onClick={onSubmit} 
            className='bg-[black] rounded p-3 text-white' type='submit'>Submit</button>
          </div>
            <p className="form-text mb-[1em] ">Already have an Account ? <a href="/">
               Sign In</a>  </p>
              </section>
            </div>
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