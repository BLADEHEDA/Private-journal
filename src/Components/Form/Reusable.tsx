import { useFormik } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';
import Modal from './Modal';
// import InputFields from './InputFields';
// import carPic from "../../assets/10109.jpg"

const InputFields = (props) => {
  return (
    <div>
   <section className="main-section-right ]  ">
         <div className='mb-1'>
            <label >{props.label}</label>
            <input 
            type={props.type}
            name={props.name}
            className={`block form-input w-full rounded border py-1 px-2 ${props.touched && props.errors ? 'border-red-400' : 'border-gray-300'}`}
              onChange={props.handleChange} onBlur={props.handleBlur} value={props.values} />
            {props.touched && props.errors && (
              <span className='text-red-400'>{props.errors}</span>
            )}
          </div>
        </section>
    </div>
  )
}
// create the temlate for reusing the input ifeld as components 

const Reusable = () => {
  const [showModal , setShowModal]= useState(false)
  // const show =()=>{
  //   setShowModal(true)
  // }



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
      toggleModal()
      //  setShowModal(!showModal)       

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
const toggleModal = ()=>{
  setShowModal(true)
}

console.log(showModal);

  return (
    <main className='mb-10 px-[1em] ' >
      <form   onSubmit={formik.handleSubmit}  >

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
<InputFields label="First name" name="firstname" type="text"
handleChange={formik.handleChange}
handleBlur={formik.handleBlur} 
touched={formik.touched.firstname}
errors={formik.errors.firstname}
values={formik.values.firstname}
/>
{/* <InputFields label="" name="" type="" /> */}
<InputFields label="Last name" name="lastname" type="texte" 
handleChange={formik.handleChange}
handleBlur={formik.handleBlur} 
touched={formik.touched.lastname}
errors={formik.errors.lastname}
values={formik.values.lastname}
/>
<InputFields label="Email" name="email" type="email" 
handleChange={formik.handleChange}
handleBlur={formik.handleBlur} 
touched={formik.touched.email}
errors={formik.errors.email}
values={formik.values.email}
/>
<InputFields label="Password" name="password" type="password" 
handleChange={formik.handleChange}
handleBlur={formik.handleBlur} 
touched={formik.touched.password}
errors={formik.errors.password}
values={formik.values.password}
/>
<InputFields label="Phone number" name="phonenumber" type="tel" 
handleChange={formik.handleChange}
handleBlur={formik.handleBlur} 
touched={formik.touched.phonenumber}
errors={formik.errors.phonenumber}
values={formik.values.phonenumber}
/>
<InputFields label="City you'll drive in" name="city" type="text" 
handleChange={formik.handleChange}
handleBlur={formik.handleBlur} 
touched={formik.touched.city}
errors={formik.errors.city}
values={formik.values.city}
/>
<InputFields label="invite Code(optional(" name="invitecode" type="text" 
handleChange={formik.handleChange}
handleBlur={formik.handleBlur} 
touched={formik.touched.invitecode}
errors={formik.errors.invitecode}
values={formik.values.invitecode}
/>
<div className='text-center'>
            <button 
           
            className='bg-[black] rounded p-3 text-white'  >Submit</button>
          </div>
          </form>
{/* <InputFields label="" name="" type="" /> */}
{showModal? (<Modal showModal={showModal} setShowModal={setShowModal}
          showmodal={showmodal}  />):null }
    </main>
    
  )
}

export default Reusable