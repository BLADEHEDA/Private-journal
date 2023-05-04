
import React from 'react';
import { Formik } from 'formik';
// bekoiw are thge template settings for the formik library 
const Basic = () => (
  <div>
    {/* <h1>Anywhere in your app!</h1> */}
    <Formik
      initialValues={{ email: '', password: '',firstname: '',lastname: '',
      phonenumber: '',city: '' }}
      validate={values => {
        const errors = {};
        // check the validity of the email
        if (!values.email) {
          errors.email = 'Required';
        } 
        else 
        if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        // check the validity of the password
        const passw=  /^[A-Za-z]\w{7,14}$/; ;
      if(!values.password){
          errors.password='Required'
        }
        else if(inputtxt.value.match(passw)){
          errors.password= 'enter the right password'
      
        }
        // check the validity of the names
        if(!values.firstname){
          errors.firstname='Required'
        }
        if(!values.Lastname){
          errors.Lastname='Required'
        }


        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
    
        //  <input type="text" className="form-input" />
      
      }) => (
        <form onSubmit={handleSubmit}>
           <article className="form divx">
            <label htmlFor="first name" className="form-label">First name</label>
            <div className="form-div">
            <input
            className='form-input'
              type="text"
              name="firstanme"
              placeholder='password'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.firstname}
            />
               </div>
            </article>
          {errors.firstname && touched.firstname && errors.firstname}
           <article className="form divx">
             <label htmlFor="Last name" className="form-label">Last name</label>
             <div className="form-div">
              <input 
              className="form-input"
              type="text" 
              name='lastname'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.lastname}
              />
             </div>
           </article>
           {errors.lastname && touched.lastname && errors.lastname}

         <article className="formdivx">
           <label htmlFor="Email" className="form-label">Email</label>
        <div className="form-div">
          <input
            className='form-input'
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          </div>
            </article>
          {errors.email && touched.email && errors.email}
 
          <article className="form divx">
            <label htmlFor="" className="form-label">Password</label>
            <div className="form-div">
            <input
            className='form-input'
              type="password"
              name="password"
              placeholder='password'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
               </div>
            </article>
          {errors.password && touched.password && errors.password}

          <article className="form divx">
            <label htmlFor="" className="form-label">Phone numbefr</label>
            <div className="form-div">
            <input
            className='form-input'
              type="text"
              name="phonenumber"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.phonenumber}
            />
               </div>
            </article>
          {errors.phonenumber && touched.phonenumber && errors.phonenumber}


          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </form>
      )}
    </Formik>
  </div>
);

export default Basic;