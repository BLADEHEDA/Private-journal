import React from "react";
import { Formik, Form,ErrorMessage,Field } from "formik";
import * as yup from "yup";
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
  const onSubmit = (values) => console.log(JSON.stringify(values, null, 4));
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

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
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
              <button style={{ display: "block" }}>submit</button>
            </div>
            {/* <pre>{JSON.stringify(formik, null, 4)}</pre> */}
          </Form>
        );
      }}
    </Formik>
  );
};
export default LoginFormikComponents;