import { useFormik } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';
import Modal from './Modal';
import carPic from "../../assets/10109.jpg"

function App() {
// the forllowing code is to hide and show the modal component 
const [showModal , setShowModal]= useState(false)

    //TODO create formik instance
    const formik = useFormik({
      initialValues: {
        car: '',
        firstname: '',
        lastname: '',
        email: '',
       password: '',
        age: '',
        phonenumber: '',
        city: '',
        invitecode:''
      },
      validationSchema: Yup.object({
        firstname: Yup.string()
        .min(2, "Too Short!")
        .max(50, "Too Long!")
        .required(),
    
      lastname: Yup.string()
        .min(2, "Too Short!")
        .max(50, "Too Long!")
        .required(),              
        email: Yup.string()
                .email()
                .required(),

         password: Yup.string()
         .required()
          .min(6, "Password is too short - should be 6 chars minimum"),

        phonenumber: Yup.string()
        .required()
        .label('phone number'),
        city:Yup.string()    
        .label('city')
        .required(),
        car:Yup.string()    
        .label('car')
        .required(),
        invitecode:Yup.string()    
        .label('invite code')
        .optional()
      }),
      onSubmit: function () { 
        setShowModal(true)        
      }
    })
// /display the modal values on
const showmodal=()=>{
  alert(`Hello bro whats up 
  car: ${formik.values.car}. 
  firstnaame: ${formik.values.firstname}. 
  lastnaame: ${formik.values.lastname}.
  Email: ${formik.values.email}.
  password: ${formik.values.password}.
  phonenumber: ${formik.values.phonenumber}.
  city: ${formik.values.city}.
  invitecode: ${formik.values.invitecode}
   `);  
  formik.resetForm();
}

    return (
      <main className="main-section shadow-lg my-[2em] w-[90%] mx-auto my-0 md:w-[70%] 
      md:flex ">
        <section className="main-section-left ">
            <article className='block md:hidden'>
              <img src={carPic} alt="carPic " />
            </article>
            <article className="content px-2 ">
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


    <section className="main-section-right mt-[0.5em] ]  ">
    <div className="form-top flex px-2 ">
            <h3 className="form-top-head font-[500] mx-1 text-[20px]  ">Become a driver</h3>
            <h3 className="form-top-head mt-[5px] ml-[12px] ">Sign up to ride</h3>
     </div>

        <form 
        onSubmit={formik.handleSubmit} 
        className=" mx-auto w-full bg-white rounded  mt-3 p-3">
{/* Validate radio buttons   */}
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

          <div className='mb-3'>
            <label >First Name</label>
            <input 
            type="text" 
            name="firstname"
             id="firstname" 
              className={`block form-input w-full rounded border py-1 px-2 ${formik.touched.firstname && formik.errors.firstname ? 'border-red-400' : 'border-gray-300'}`}
              onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.firstname} />
            {formik.touched.firstname && formik.errors.firstname && (
              <span className='text-red-400'>{formik.errors.firstname}</span>
            )}
          </div>
          <div className='mb-3'>
            <label >Last Name</label>
            <input type="text" name="lastname" id="lastname" 
              className={`block form-input w-full rounded border py-1 px-2 ${formik.touched.lastname && formik.errors.lastname ? 'border-red-400' : 'border-gray-300'}`}
              onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.lastname} />
            {formik.touched.lastname && formik.errors.lastname && (
              <span className='text-red-400'>{formik.errors.lastname}</span>
            )}
          </div>

          <div className='mb-3'>
            <label >Email</label>
            <input 
            type="email"
             name="email"
              id="email"
              className={`block form-input w-full rounded border py-1 px-2 ${formik.touched.email && formik.errors.email ? 'border-red-400' : 'border-gray-300'}`}
              onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} />
            {formik.touched.email && formik.errors.email && (
              <span className='text-red-400'>{formik.errors.email}</span>
            )}
          </div>

          <div className='mb-3'>
            <label >Password</label>
            <input 
            type="password"
            name="password"
            id="password"
              className={`block form-input w-full rounded border py-1 px-2 ${formik.touched.password && formik.errors.password ? 'border-red-400' : 'border-gray-300'}`}
              onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password} />
            {formik.touched.password && formik.errors.password && (
              <span className='text-red-400'>{formik.errors.password}</span>
            )}
          </div>
          <div className='mb-3'>
            <label >phone number</label>
            <input 
            type="tel" 
            name="phonenumber" 
            id="phonenumber"
              className={`block form-input w-full rounded border py-1  ${formik.touched.phonenumber && formik.errors.phonenumber ? 'border-red-400' : 'border-gray-300'}`}
              onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.phonenumber} />
            {formik.touched.phonenumber && formik.errors.phonenumber && (
              <span className='text-red-400'>{formik.errors.phonenumber}</span>
            )}
          </div>
          <div className='mb-3'>
            <label >city you'll drive in </label>
            <input type="text" name="city" id="city"
              className={`block form-input w-full rounded border py-1 px-2 ${formik.touched.city && formik.errors.city ? 'border-red-400' : 'border-gray-300'}`}
              onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.city} />
            {formik.touched.city && formik.errors.city && (
              <span className='text-red-400'>{formik.errors.city}</span>
            )}
          </div>
          <div className='mb-3'>
            <label >invite code </label>
            <input type="text" name="invitecode" id="city"
              className={`block form-input w-full rounded border py-1 px-2 ${formik.touched.invitecode && formik.errors.invitecode ? 'border-red-400' : 'border-gray-300'}`}
              onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.invitecode} />
            {formik.touched.invitecode && formik.errors.invitecode && (
              <span className='text-red-400'>{formik.errors.invitecode}</span>
            )}
          </div>

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
            className='bg-[black] rounded p-3 text-white' type='submit'>Submit</button>
          </div>
            <p className="form-text mb-[1em] ">Already have an Account ? <a href="/">
               Sign In</a>  </p>
        </form>
        </section>

              {showModal? (<Modal showModal={showModal} setShowModal={setShowModal}
          showmodal={showmodal}  />):null }
      </main>
    );
}

export default App;