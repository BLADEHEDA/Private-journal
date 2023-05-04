import { useFormik } from 'formik';
import * as Yup from 'yup';

// build the props for the component 
const modal=()=>{
  return(
    <main>

    </main>
  )
}

function App() {
    //TODO create formik instance
    const formik = useFormik({
      initialValues: {
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
        .required("Firstname is required"),
    
      lastname: Yup.string()
        .min(2, "Too Short!")
        .max(50, "Too Long!")
        .required("Lastname is required"),              
        email: Yup.string()
                .email()
                .required(),

         password: Yup.string()
         .required("Password is required")
          .min(6, "Password is too short - should be 6 chars minimum"),

        phonenumber: Yup.string()
        .required("Phone number is required")
        .label('phone number'),
        city:Yup.string()    
        .label('city')
        .required(),
        invitecode:Yup.string()    
        .label('invite code')
        .optional()

      }),
      onSubmit: function (values) {
        alert(values.firstname);
        console.log(values.firstname);
        
        alert(`You are registered! 
        firstnaame: ${values.firstname}. 
        lastnaame: ${values.lastname}.
        Email: ${values.email}.
        password: ${values.password}.
        phonenumber: ${values.phonenumber}.
        city: ${values.city}.
        invitecode: ${values.invitecode}
         `);
        //  display on the console
         console.log(`You are registered! 
         firstnaame: ${values.firstname}. 
         lastnaame: ${values.lastname}.
         Email: ${values.email}.
         password: ${values.password}.
         phonenumber: ${values.phonenumber}.
         city: ${values.city}.
         invitecode: ${values.invitecode}
          `);
         
      }
    })
    
    return (
      <main className="main-section ">
        {/* <section className="main-section-left">
          <h1>Opportunity is EveryWhere</h1>
        </section> */}

    <section className="main-section-right mt-[0.5em] shadow-lg ">
    <div className="form-top flex px-2 ">
            <h3 className="form-top-head font-[500] mx-1 text-[20px]  ">Become a driver</h3>
            <h3 className="form-top-head mt-[5px] ml-[12px] ">Sign up to ride</h3>
     </div>
     <div className='flex px-3 mt-3  ' >
        <input type="radio" className='w-[18px] bg-[black] mr-2 ' name='car'/> I have a Car
        <input type="radio" className='w-[18px] bg-[black] ml-7 mr-2'  name='car'  /> I need a Car
      </div>
        <form onSubmit={formik.handleSubmit} className=" mx-auto w-full bg-white rounded  mt-3 p-3">
        {/* <h1 className='text-3xl mb-3 text-center'>Register</h1> */}
          <div className='mb-3'>
            <label for="firstname">First Name</label>
            <input type="text" name="firstname" id="firstname" 
              className={`block form-input w-full rounded border py-1 px-2 ${formik.touched.firstname && formik.errors.firstname ? 'border-red-400' : 'border-gray-300'}`}
              onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.firstname} />
            {formik.touched.firstname && formik.errors.firstname && (
              <span className='text-red-400'>{formik.errors.firstname}</span>
            )}
          </div>
          <div className='mb-3'>
            <label for="lastname">Last Name</label>
            <input type="text" name="lastname" id="lastname" 
              className={`block form-input w-full rounded border py-1 px-2 ${formik.touched.lastname && formik.errors.lastname ? 'border-red-400' : 'border-gray-300'}`}
              onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.lastname} />
            {formik.touched.lastname && formik.errors.lastname && (
              <span className='text-red-400'>{formik.errors.lastname}</span>
            )}
          </div>

          <div className='mb-3'>
            <label for="email">Email</label>
            <input type="email" name="email" id="email"
              className={`block form-input w-full rounded border py-1 px-2 ${formik.touched.email && formik.errors.email ? 'border-red-400' : 'border-gray-300'}`}
              onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} />
            {formik.touched.email && formik.errors.email && (
              <span className='text-red-400'>{formik.errors.email}</span>
            )}
          </div>

          <div className='mb-3'>
            <label for="password">Password</label>
            <input type="password" name="password" id="password"
              className={`block form-input w-full rounded border py-1 px-2 ${formik.touched.password && formik.errors.password ? 'border-red-400' : 'border-gray-300'}`}
              onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password} />
            {formik.touched.password && formik.errors.password && (
              <span className='text-red-400'>{formik.errors.password}</span>
            )}
          </div>
          <div className='mb-3'>
            <label for="email">phone number</label>
            <input type="tel" name="phonenumber" id="phonenumber"
              className={`block form-input w-full rounded border py-1  ${formik.touched.phonenumber && formik.errors.phonenumber ? 'border-red-400' : 'border-gray-300'}`}
              onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.phonenumber} />
            {formik.touched.phonenumber && formik.errors.phonenumber && (
              <span className='text-red-400'>{formik.errors.phonenumber}</span>
            )}
          </div>
          <div className='mb-3'>
            <label for="text">city you'll drive in </label>
            <input type="text" name="city" id="city"
              className={`block form-input w-full rounded border py-1 px-2 ${formik.touched.city && formik.errors.city ? 'border-red-400' : 'border-gray-300'}`}
              onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.city} />
            {formik.touched.city && formik.errors.city && (
              <span className='text-red-400'>{formik.errors.city}</span>
            )}
          </div>
          <div className='mb-3'>
            <label for="text">invite code </label>
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
            <button className='bg-[black] rounded p-3 text-white' type='submit'>Submit</button>
          </div>
            <p className="form-text">Already have an Account ? <a href="/">
               Sign In</a>  </p>
        </form>
        </section>



        {/* Trying to display the form values as jsx */}
       {/* <div className="lol">
        {formik.values.firstname}
        </div>  */}
        {/* </form> */}
      </main>
    );
}

export default App;